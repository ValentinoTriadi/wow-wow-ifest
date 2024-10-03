import { postRouter } from "@/server/api/routers/post";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { lahanRouter } from "./routers/lahan";
import {authRouter} from "@/server/api/routers/authentication";
import {panenRouter} from "@/server/api/routers/panen";
import {bibitRouter} from "@/server/api/routers/bibit";
import {produkRouter} from "@/server/api/routers/produk";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  lahan: lahanRouter,
  auth: authRouter,
  panen: panenRouter,
  bibit: bibitRouter,
  produk: produkRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
