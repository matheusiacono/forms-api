import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { formFieldRules } from "../form-fields-rules";

@Entity()
export class FormFieldsEntity {
  @PrimaryGeneratedColumn()
  id: number;

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
}
