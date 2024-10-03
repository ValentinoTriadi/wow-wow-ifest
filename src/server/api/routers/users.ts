import {createTRPCRouter, protectedProcedure} from "@/server/api/trpc";
import {GetUserSchema, UpdateUserSchema} from "@/lib/schema";


export const userRouter = createTRPCRouter({
    getUser: protectedProcedure
        .input(GetUserSchema)
        .query(async ({ctx, input}) => {
            return ctx.db.user.findUnique({
                where: {
                    id: input.id
                }
            })
        }),

    updateUser: protectedProcedure
        .input(UpdateUserSchema)
        .mutation(async ({ctx, input}) => {
            try {
                return ctx.db.user.update({
                    where: {
                        id: input.id
                    },
                    data: {
                        name: input.name,
                        email: input.email,
                        phoneNumber: input.phone,
                        password: input.password
                    }
                })
            } catch (error) {
                console.log(error)
                return null
            }
        })
})