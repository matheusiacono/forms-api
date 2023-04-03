import { FormTypes } from "../form-fields-rules";

const nameForm = {
  formType: FormTypes.NAME_FORM,
  fullName: {
    type: "text",
    required: true,
  },
};

const contactForm = {
  formType: FormTypes.CONTACT_FORM,
  fullName: {
    type: "text",
    required: true,
  },
  email: {
    type: "text",
    required: true,
  },
};

const forms = {
  [FormTypes.NAME_FORM]: nameForm,
  [FormTypes.CONTACT_FORM]: contactForm,
};

export const getFormStructureById = (
  formType: FormTypes
): typeof nameForm | typeof contactForm | undefined => forms[formType];
