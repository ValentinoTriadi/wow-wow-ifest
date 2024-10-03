import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import {
  deleteSchema,
  getAllLahanSchema,
  lahanSchema,
  lahanUpdateSchema,
} from "@/lib/schema";

export const lahanRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello From Lahan Route, ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(lahanSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const tersediaUntuk = input.jenis
          .split(",")
          .map((jenis) => jenis.trim());
        if (!ctx.db.lahan) {
          throw new Error(
            "Database connection error or invalid 'lahan' model.",
          );
        }

        return ctx.db.lahan.create({
          data: {
            header: input.name,
            luasLahan: input.luas,
            harga: input.harga,
            tersediaUntuk,
            deskripsi: input.deskripsi,
            embedMaps: input.latitude + "," + input.longitude,
            Lokasi:
              input.alamat +
              ", " +
              input.kelurahan +
              ", " +
              input.kecamatan +
              ", " +
              input.kabupaten +
              ", " +
              input.provinsi,
            userId: ctx.session.user.id,
          },
        });
      } catch (error) {
        console.log(error);
        return null;
      }
    }),

  update: protectedProcedure
    .input(lahanUpdateSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        if (!ctx.db.lahan) {
          throw new Error(
            "Database connection error or invalid 'lahan' model.",
          );
        }
        const lahanOwner = await ctx.db.lahan.findFirst({
          where: {
            id: input.id,
          },
        });

        if (lahanOwner?.userId !== ctx.session.user.id) {
          throw new Error("You are not the owner of this lahan.");
        }

        const tersediaUntuk = input.jenis
          ? input.jenis.split(",").map((jenis) => jenis.trim())
          : lahanOwner.tersediaUntuk;

        let savedLokasi = lahanOwner.Lokasi?.split(", ");
        if (!savedLokasi) {
          savedLokasi = ["", "", "", "", ""];
        }

        const Lokasi =
          input.alamat ??
          savedLokasi[0] + ", " + input.kelurahan ??
          savedLokasi[1] + ", " + input.kecamatan ??
          savedLokasi[2] + ", " + input.kabupaten ??
          savedLokasi[3] + ", " + input.provinsi ??
          savedLokasi[4];

        return ctx.db.lahan.update({
          data: {
            header: input.name ?? lahanOwner.header,
            luasLahan: input.luas ?? lahanOwner.luasLahan,
            harga: input.harga ?? lahanOwner.harga,
            tersediaUntuk,
            deskripsi: input.deskripsi ?? lahanOwner.deskripsi,
            embedMaps:
              input.latitude && input.longitude
                ? input.latitude + "," + input.longitude
                : lahanOwner.embedMaps,
            Lokasi,
          },
          where: {
            id: input.id,
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
        if (!ctx.db.lahan) {
          throw new Error(
            "Database connection error or invalid 'lahan' model.",
          );
        }
        const lahanOwner = await ctx.db.lahan.findFirst({
          where: {
            id: input.id,
          },
        });

        if (lahanOwner?.userId !== ctx.session.user.id) {
          throw new Error("You are not the owner of this lahan.");
        }

        return ctx.db.lahan.delete({
          where: {
            id: input.id,
          },
        });
      } catch (error) {
        console.log(error);
        return null;
      }
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      try {
        if (!ctx.db.lahan) {
          throw new Error(
            "Database connection error or invalid 'lahan' model.",
          );
        }
        return ctx.db.lahan.findFirst({
          where: {
            id: input.id,
          },
        });
      } catch (error) {
        console.log(error);
        return null;
      }
    }),

  getByUserId: protectedProcedure.query(async ({ ctx }) => {
    try {
      if (!ctx.db.lahan) {
        throw new Error("Database connection error or invalid 'lahan' model.");
      }
      return ctx.db.lahan.findMany({
        where: {
          userId: ctx.session.user.id,
        },
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }),

  getAll: protectedProcedure
    .input(getAllLahanSchema)
    .query(async ({ ctx, input }) => {
      try {
        if (!ctx.db.lahan) {
          throw new Error(
            "Database connection error or invalid 'lahan' model.",
          );
        }
        return ctx.db.lahan.findMany({
          where: {
            tersediaUntuk: {
              hasSome: input.kategori ? input.kategori.split(",") : undefined,
            },
            luasLahan: {
              gte: input.minLuas ?? 0,
              lte: input.maxLuas ?? 999999999,
            },
            Lokasi: {
              contains: input.lokasi ?? "",
            },
            harga: {
              gte: input.minHarga ?? 0,
              lte: input.maxHarga ?? 9999999999,
            },
          },
        });
      } catch (error) {
        console.log(error);
        return null;
      }
    }),
});
