import { AppDataSource } from "../../infrastructure/data-source";
import { FormFieldsEntity } from "../entities/form-fields-entity";
import { ContactForm } from "../schemas/contact-form";
import { NameForm } from "../schemas/name-form";

const formFieldsRepository = AppDataSource.getRepository(FormFieldsEntity);

export const saveFormFields = async (formFields: NameForm | ContactForm) => {
  const formFieldsEntry = new FormFieldsEntity();

  if ((formFields as ContactForm).email) {
    formFieldsEntry.email = (formFields as ContactForm).email;
  }

  formFieldsEntry.fullName = formFields.fullName;
  formFieldsEntry.formType = formFields.formType;

  await formFieldsRepository.save(formFieldsEntry);
  return formFieldsEntry;
};
