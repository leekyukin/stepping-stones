/*
  Warnings:

  - Added the required column `bank` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `depositorName` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "bank" TEXT NOT NULL,
ADD COLUMN     "depositorName" TEXT NOT NULL;
