import { postRouter } from "@/server/api/routers/post";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { lahanRouter } from "./routers/lahan";
import { authRouter } from "./routers/authentication";
import { panenRouter } from "@/server/api/routers/panen";
import { bibitRouter } from "@/server/api/routers/bibit";
import { produkRouter } from "@/server/api/routers/produk";
import { pekerjaRouter } from "./routers/pekerja";
import {userRouter} from "@/server/api/routers/users";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  lahan: lahanRouter,
  pekerja: pekerjaRouter,
  auth: authRouter,
  panen: panenRouter,
  bibit: bibitRouter,
  produk: produkRouter,
  user: userRouter
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
