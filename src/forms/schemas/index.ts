import { FormTypes } from "../form-fields-rules";
import { contactFormSchema } from "./contact-form";
import { nameFormSchema } from "./name-form";

const schemas = {
  [FormTypes.CONTACT_FORM]: contactFormSchema,
  [FormTypes.NAME_FORM]: nameFormSchema,
};

export const getSchemas = (
  schemaName: string
): typeof contactFormSchema | typeof nameFormSchema | undefined =>
  schemas[schemaName as FormTypes];
