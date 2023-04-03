import { DataSource } from "typeorm";
import { FormFieldsEntity } from "../forms/entities/form-fields-entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "admin",
  database: "forms-api",
  entities: [FormFieldsEntity],
  synchronize: false,
  logging: false,
});
