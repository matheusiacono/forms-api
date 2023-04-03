import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { FormTypes, formFieldRules } from "../form-fields-rules";

@Entity()
export class FormFieldsEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: formFieldRules.formTypeLength })
  formType: string;

  @Column("varchar", {
    length: formFieldRules.fullNameLength,
  })
  fullName: string;

  @Column("varchar", {
    length: formFieldRules.emailLength,
  })
  email: string;

  constructor({
    formType,
    fullName,
    email,
  }: {
    formType?: FormTypes;
    fullName?: string;
    email?: string;
  }) {
    if (formType) {
      this.formType = formType;
    }

    if (fullName) {
      this.fullName = fullName;
    }

    if (email) {
      this.email = email;
    }
  }
}
