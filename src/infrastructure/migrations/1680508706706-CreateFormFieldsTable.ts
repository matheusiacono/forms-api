import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFormFieldsTable1680508706706 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          CREATE TABLE FORM_FIELDS(
            id SERIAL PRIMARY KEY,
            full_name VARCHAR(255) DEFAULT NULL,
            email VARCHAR(255) DEFAULT NULL,
            form_type VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
          )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE FORM_FIELDS");
  }
}
