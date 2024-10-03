import {createTRPCRouter, protectedProcedure} from "@/server/api/trpc";
import {CreatePanenSchema, UpdateRatingSchema} from "@/lib/schema";


export const panenRouter = createTRPCRouter({
    createPanen: protectedProcedure
        .input(CreatePanenSchema)
        .mutation(
            async ({ctx, input}) => {
                try {
                    if (!ctx.db.panen) {
                        throw new Error(
                            "Database connection error or invalid 'panen' model.",
                        );
                    }

                    return ctx.db.panen.create({
                        data: {
                            userId: input.userId,
                            images: input.images,
                            title: input.title,
                            lokasi: input.lokasi,
                            kondisi: input.kondisi
                        },
                    });
                } catch (error) {
                    console.log(error);
                    return null;
                }
            }
        ),

    updateRating: protectedProcedure
        .input(UpdateRatingSchema)
        .mutation(
            async ({ctx, input}) => {
                try {
                    if (!ctx.db.rating) {
                        throw new Error(
                            "Database connection error or invalid 'rating' model.",
                        );
                    }

                    return ctx.db.rating.create({
                        data: {
                            createdById: input.userId,
                            workerId: input.workerId,
                            panenId: input.panenId,
                            rate: input.rating,
                            createdAt: new Date()
                        },
                    });
                } catch (error) {
                    console.log(error);
                    return null;
                }
            }
        ),
});
