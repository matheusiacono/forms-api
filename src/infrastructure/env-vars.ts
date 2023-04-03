import dotenv from "dotenv";

dotenv.config();

export const port = process.env["PORT"] ?? 3000;
export const dbHost = process.env["DB_HOST"] ?? "localhost";
export const dbUser = process.env["DB_USER"] ?? "";
export const dbPassword = process.env["DB_PASSWORD"] ?? "";
export const dbName = process.env["DB_NAME"] ?? "forms-api";
