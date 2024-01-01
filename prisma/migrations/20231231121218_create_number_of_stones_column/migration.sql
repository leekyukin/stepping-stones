/*
  Warnings:

  - Added the required column `numberOfStones` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "numberOfStones" INTEGER NOT NULL;
