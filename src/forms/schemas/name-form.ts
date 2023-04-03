import { z } from "zod";
import { formFields } from "./form-fields";
import { FormTypes } from "../form-fields-rules";

export const nameFormSchema = z.object({
  fullName: formFields.fullName,
  formType: z.literal(FormTypes.NAME_FORM),
});

export type NameForm = z.infer<typeof nameFormSchema>;
