import { FormTypes } from "../form-fields-rules";

const nameForm = {
  fullName: {
    type: "text",
    required: true,
  },
};

const contactForm = {
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
