/*
  Warnings:

  - You are about to drop the column `colors` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `detailImages` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `subcategory` on the `Item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "colors",
DROP COLUMN "detailImages",
DROP COLUMN "subcategory";
