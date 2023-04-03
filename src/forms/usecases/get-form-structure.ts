import { FormTypes } from "../form-fields-rules";
import { getFormStructureById } from "../repositories/form-structure-repository";

export const getFormStructure = (formType: FormTypes) => {
  const formStructure = getFormStructureById(formType);

  if (!formStructure) {
    return { Err: "Form type does not exist" };
  }

  return { Ok: formStructure };
};
