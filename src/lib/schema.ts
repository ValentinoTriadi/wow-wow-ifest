import {z} from "zod";


export const registerSchema = z.object({
    phone: z.number().min(10).max(13),
    gender: z.enum(["Laki-laki", "Perempuan"]),
    nama: z.string().min(3).max(255),
    birthdate: z.string().min(10).max(10),
})

export const loginSchema = z.object({
    email_or_phone: z.string().min(10).max(255),
    password: z.string().min(8).max(255),
})