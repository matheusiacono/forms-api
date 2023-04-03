import { saveFormFields } from "../repositories/form-fields-repository";
import { getSchemas } from "../schemas";

export const createFormEntry = async (formData: Record<string, unknown>) => {
  const formSchema = getSchemas(formData["formType"] as string);

  if (!formSchema) {
    return { Err: "Form type does not exist" };
  }

  const result = formSchema.safeParse(formData);

  if (!result.success) {
    return { Err: result.error.format() };
  }

  const newForm = await saveFormFields(result.data);
  return { Ok: newForm };
};
