import { z } from "zod";
import { formFieldRules } from "../form-fields-rules";

export const formFields = {
  fullName: z.string().min(2).max(formFieldRules.fullNameLength),
  email: z.string().email().min(5).max(formFieldRules.emailLength),
};
