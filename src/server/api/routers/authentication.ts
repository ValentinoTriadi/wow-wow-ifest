import bcrypt from "bcryptjs";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { loginSchema, registerSchema } from "@/lib/schema";
import { signOut } from "next-auth/react";

export const authRouter = createTRPCRouter({
  login: publicProcedure.input(loginSchema).mutation(async ({ ctx, input }) => {
    const user = await ctx.db.user.findFirst({
      where: { email: input.email_or_phone },
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
          name: input.nama,
          email: input.email,
          password: hashedPassword,
        },
      });

      if (!user) {
        throw new Error("Failed to register user");
      }

      return user;
    }),

  self: protectedProcedure.query(async ({ ctx }) => {
    return ctx.session.user;
  }),
});
