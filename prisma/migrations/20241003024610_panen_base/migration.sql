/*
  Warnings:

  - The `rate` column on the `Rating` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Rating" DROP COLUMN "rate",
ADD COLUMN     "rate" INTEGER[];

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT;

-- CreateTable
CREATE TABLE "Panen" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "images" TEXT[],
    "title" TEXT NOT NULL,
    "lokasi" TEXT NOT NULL,
    "kondisi" TEXT NOT NULL,
    "ratingId" INTEGER NOT NULL,

    CONSTRAINT "Panen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaporanPekerja" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "rating" INTEGER,
    "panenId" TEXT,

    CONSTRAINT "LaporanPekerja_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Panen" ADD CONSTRAINT "Panen_ratingId_fkey" FOREIGN KEY ("ratingId") REFERENCES "Rating"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaporanPekerja" ADD CONSTRAINT "LaporanPekerja_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaporanPekerja" ADD CONSTRAINT "LaporanPekerja_panenId_fkey" FOREIGN KEY ("panenId") REFERENCES "Panen"("id") ON DELETE SET NULL ON UPDATE CASCADE;
