import {
    createTRPCRouter,
    protectedProcedure,
} from "@/server/api/trpc";
import {GetBibitSchema} from "@/lib/schema";

export const bibitRouter = createTRPCRouter({
    getBibit: protectedProcedure
        .input(GetBibitSchema)
        .query(
            async ({ctx, input}) => {
                try {
                    if (!ctx.db.bibit) {
                        throw new Error(
                            "Database connection error or invalid 'bibit' model.",
                        );
                    }

                    return ctx.db.bibit.findMany({
                        where: {
                            tag: {
                                has: input.tag,
                            }
                        }
                    });
                } catch (error) {
                    console.log(error);
                    return null;
                }
            }
        ),
});