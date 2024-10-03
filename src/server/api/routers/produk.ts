import {createTRPCRouter, protectedProcedure} from "@/server/api/trpc";
import {GetProdukSchema} from "@/lib/schema";


export const produkRouter = createTRPCRouter({
    getProduk: protectedProcedure
        .input(GetProdukSchema)
        .query(
            async ({ctx, input}) => {
                try {
                    if (!ctx.db.product) {
                        throw new Error(
                            "Database connection error or invalid 'produk' model.",
                        );
                    }

                    return ctx.db.product.findMany({
                        where: {
                            tag: {
                                has: input.tag
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