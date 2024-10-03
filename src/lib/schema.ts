import { z } from "zod";

export const deleteSchema = z.object({ id: z.string().min(1) });

// Auth Schema
export const registerSchema = z.object({
  phone: z.number().min(10).max(13),
  gender: z.enum(["Lakilaki", "Perempuan"]),
  nama: z.string().min(3).max(255),
  birthdate: z.string().min(10).max(10),
  NIK: z.number().min(12).max(12),
  password: z.string().min(8).max(255),
});

export const loginSchema = z.object({
  email_or_phone: z.string().min(10).max(255),
  password: z.string().min(8).max(255),
});

// Lahan Schema
export const lahanSchema = z.object({
  name: z.string().min(1),
  deskripsi: z.string(),
  luas: z.number(),
  harga: z.number(),
  jenis: z.string(),
  alamat: z.string(),
  kelurahan: z.string(),
  kecamatan: z.string(),
  kabupaten: z.string(),
  provinsi: z.string(),
  latitude: z.number(),
  longitude: z.number(),
});

export const lahanUpdateSchema = lahanSchema.partial().merge(
  z.object({
    id: z.string(),
  }),
);

export const getAllLahanSchema = z.object({
  limit: z.number().optional(),
  offset: z.number().optional(),
  kategori: z.string().optional(),
  lokasi: z.string().optional(),
  minLuas: z.number().optional(),
  maxLuas: z.number().optional(),
  minHarga: z.number().optional(),
  maxHarga: z.number().optional(),
});

// Pekerja Schema
export const pekerjaSchema = z.object({
  nama: z.string().min(1),
  deskripsi: z.string(),
  harga: z.number(),
  lokasi: z.string(),
  keahlian: z.string(),
  rincianKerja: z.string(),
  images: z.array(z.instanceof(File)),
});

export const pekerjaUpdateSchema = pekerjaSchema.partial().merge(
  z.object({
    id: z.string(),
  }),
);

export const getAllPekerjaSchema = z.object({
  limit: z.number().optional(),
  offset: z.number().optional(),
  keahlian: z.string().optional(),
  rincianKerja: z.string().optional(),
  lokasi: z.string().optional(),
  minHarga: z.number().optional(),
  maxHarga: z.number().optional(),
});


// Panen Schema
export const CreatePanenSchema = z.object({
    userId: z.string(),
    images: z.array(z.string()),
    title: z.string(),
    lokasi: z.string(),
    kondisi: z.string()
})

export const UpdateRatingSchema = z.object({
    userId: z.string(),
    workerId: z.string(),
    panenId: z.string(),
    rating: z.array(z.number().min(1).max(5))
})
