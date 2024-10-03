import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import {
  deleteSchema,
  getAllPekerjaSchema,
  pekerjaSchema,
  pekerjaUpdateSchema,
} from "@/lib/schema";

export const pekerjaRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello From Pekerja Route, ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(pekerjaSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        if (!ctx.db.pekerja) {
          throw new Error(
            "Database connection error or invalid 'pekerja' model.",
          );
        }

        const keahlian = input.keahlian
          .split(",")
          .map((keahlian) => keahlian.trim());

        const rincianKerja = input.rincianKerja
          .split(",")
          .map((rincian) => rincian.trim());

        return ctx.db.pekerja.create({
          data: {
            nama: input.nama,
            deskripsi: input.deskripsi,
            harga: input.harga,
            lokasi: input.lokasi,
            keahlian,
            rincianKerja,
            userId: ctx.session.user.id,
          },
        });
      } catch (error) {
        console.log(error);
        return null;
      }
    }),

  update: protectedProcedure
    .input(pekerjaUpdateSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        if (!ctx.db.pekerja) {
          throw new Error(
            "Database connection error or invalid 'pekerja' model.",
          );
        }

        const pekerja = await ctx.db.pekerja.findUnique({
          where: {
            id: input.id,
          },
        });

        if (!pekerja) {
          throw new Error("Pekerja not found.");
        }

        if (pekerja.userId !== ctx.session.user.id) {
          throw new Error("Unauthorized access.");
        }

        const keahlian = input.keahlian
          ? input.keahlian.split(",").map((keahlian) => keahlian.trim())
          : [];

        const rincianKerja = input.rincianKerja
          ? input.rincianKerja.split(",").map((rincian) => rincian.trim())
          : [];

        return ctx.db.pekerja.update({
          where: {
            id: input.id,
          },
          data: {
            nama: input.nama ?? "",
            deskripsi: input.deskripsi ?? "",
            harga: input.harga ?? 0,
            lokasi: input.lokasi ?? "",
            keahlian,
            rincianKerja,
          },
        });
      } catch (error) {
        console.log(error);
        return null;
      }
    }),

  delete: protectedProcedure
    .input(deleteSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        if (!ctx.db.pekerja) {
          throw new Error(
            "Database connection error or invalid 'pekerja' model.",
          );
        }

        const pekerja = await ctx.db.pekerja.findUnique({
          where: {
            id: input.id,
          },
        });

        if (!pekerja) {
          throw new Error("Pekerja not found.");
        }

        if (pekerja.userId !== ctx.session.user.id) {
          throw new Error("Unauthorized access.");
        }

        return ctx.db.pekerja.delete({
          where: {
            id: input.id,
          },
        });
      } catch (error) {
        console.log(error);
        return null;
      }
    }),

  getAll: protectedProcedure
    .input(getAllPekerjaSchema)
    .query(async ({ ctx, input }) => {
      try {
        if (!ctx.db.pekerja) {
          throw new Error(
            "Database connection error or invalid 'pekerja' model.",
          );
        }

        const keahlian = input.keahlian
          ? input.keahlian?.split(",").map((keahlian) => keahlian.trim())
          : [];

        const rincianKerja = input.rincianKerja
          ? input.rincianKerja?.split(",").map((rincian) => rincian.trim())
          : [];

        const pekerja = await ctx.db.pekerja.findMany({
          take: input.limit,
          skip: input.offset,
          where: {
            lokasi: {
              contains: input.lokasi ?? "",
            },
            harga: {
              gte: input.minHarga ?? 0,
              lte: input.maxHarga ?? 999999999,
            },
          },
        });

        let filteredPekerja;
        if (keahlian.length > 0) {
          filteredPekerja = pekerja.filter((p) => {
            p.keahlian.some((k) => keahlian.includes(k));
          });
        }
        if (rincianKerja.length > 0) {
          filteredPekerja = pekerja.filter((p) => {
            p.rincianKerja.some((r) => rincianKerja.includes(r));
          });
        }

        return filteredPekerja ?? pekerja;
      } catch (error) {
        console.log(error);
        return null;
      }
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        if (!ctx.db.pekerja) {
          throw new Error(
            "Database connection error or invalid 'pekerja' model.",
          );
        }

        return ctx.db.pekerja.findUnique({
          where: {
            id: input.id,
          },
        });
      } catch (error) {
        console.log(error);
        return null;
      }
    }),

  getByUserId: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        if (!ctx.db.pekerja) {
          throw new Error(
            "Database connection error or invalid 'pekerja' model.",
          );
        }

        return ctx.db.pekerja.findMany({
          where: {
            userId: input.userId,
          },
        });
      } catch (error) {
        console.log(error);
        return null;
      }
    }),
});
