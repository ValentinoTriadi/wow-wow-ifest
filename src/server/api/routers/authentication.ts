import bcrypt from "bcryptjs";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { loginSchema, registerSchema } from "@/lib/schema";

export const authRouter = createTRPCRouter({
  login: publicProcedure.input(loginSchema).mutation(async ({ ctx, input }) => {
    const user = await ctx.db.user.findFirst({
      where: {
        OR: [
          { email: input.email_or_phone },
          { phoneNumber: parseInt(input.email_or_phone) },
        ],
        password: input.password,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }),

  register: publicProcedure
    .input(registerSchema)
    .mutation(async ({ ctx, input }) => {
      const hashedPassword = await bcrypt.hash(input.password, 10);
      if (!hashedPassword) {
        throw new Error("Failed to hash password");
      }

      const user = await ctx.db.user.create({
        data: {
          phoneNumber: input.phone,
          gender: input.gender,
          name: input.nama,
          tanggalLahir: input.birthdate,
          NIK: input.NIK,
          password: hashedPassword,
        },
      });

      if (!user) {
        throw new Error("Failed to register user");
      }

      return user;
    }),
});
