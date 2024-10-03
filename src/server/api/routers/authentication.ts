import bcrypt from "bcryptjs";

import {createTRPCRouter, protectedProcedure} from "@/server/api/trpc";
import {loginSchema, registerSchema} from "@/lib/schema";


export const authRouter = createTRPCRouter({
    login: protectedProcedure
        .input(loginSchema)
        .query(
            async ({ctx, input}) => {
                const user = await ctx.db.user.findFirst({
                    where: {
                        OR: [
                            {email: input.email_or_phone},
                            {phoneNumber: parseInt(input.email_or_phone)}
                        ],
                        password: input.password
                    }
                });

                if (!user) {
                    throw new Error("User not found");
                }

                return user;
            }
        ),

    register: protectedProcedure
        .input(registerSchema)
        .query(
            async ({ctx, input}) => {

                const user = await ctx.db.user.create({
                    data: {
                        phoneNumber: input.phone,
                        gender: input.gender,
                        name: input.nama,
                        tanggalLahir: input.birthdate,
                        NIK: input.NIK,
                        password: bcrypt.hashSync(input.password, 8)
                    }
                })

                if (!user) {
                    throw new Error("Failed to register user");
                }

                return user;
        }),
});