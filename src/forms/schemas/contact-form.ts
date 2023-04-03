import { z } from "zod";

import { formFields } from "./form-fields";
import { FormTypes } from "../form-fields-rules";

export const contactFormSchema = z.object({
  fullName: formFields.fullName,
  email: formFields.email,
  formType: z.literal(FormTypes.CONTACT_FORM),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
