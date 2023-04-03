import { AppDataSource } from "../../infrastructure/data-source";
import { FormFieldsEntity } from "../entities/form-fields-entity";

const formFieldsRepository = AppDataSource.getRepository(FormFieldsEntity);

export const saveFormFields = async (formFields: FormFieldsEntity) => {
  await formFieldsRepository.save(formFields);
  return formFields;
};
