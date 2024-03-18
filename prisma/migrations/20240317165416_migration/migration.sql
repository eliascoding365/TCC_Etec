/*
  Warnings:

  - You are about to alter the column `name` on the `Vaga` table. The data in that column could be lost. The data in that column will be cast from `Char(255)` to `Char`.

*/
-- AlterTable
ALTER TABLE "Vaga" ALTER COLUMN "name" SET DATA TYPE CHAR;
