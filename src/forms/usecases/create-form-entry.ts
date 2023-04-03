import { FormFieldsEntity } from "../entities/form-fields-entity";
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

  const newForm = new FormFieldsEntity(result.data);

  await saveFormFields(newForm);
  return { Ok: newForm };
};
