import { DataSource } from "typeorm";
import { FormFieldsEntity } from "../forms/entities/form-fields-entity";
import { dbHost, dbName, dbPassword, dbUser } from "./env-vars";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: dbHost,
  port: 5432,
  username: dbUser,
  password: dbPassword,
  database: dbName,
  entities: [FormFieldsEntity],
  migrations: ["./migrations/**"],
});
