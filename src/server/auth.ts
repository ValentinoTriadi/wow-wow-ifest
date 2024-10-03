import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import { env } from "@/env";
import { db } from "@/server/db";
import CredentialsProvider from "next-auth/providers/credentials";
import { TRPCError } from "@trpc/server";
import { compare } from "bcryptjs";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: ({ token, user, profile }) => {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.id,
        name: token.name,
        email: token.email,
      },
    }),
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Gunakan Email Anda",
        },
        password: {
          label: "Kata Sandi",
          type: "password",
          placeholder: "Gunakan Kata Sandi Anda",
        },
      },

      async authorize(credentials) {
        try {
          if (!credentials) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "Credentials are required",
            });
          }

          if (!credentials.email) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "Email is required",
            });
          }

          if (!credentials.password) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "Password is required",
            });
          }

          const { email, password } = credentials;

          const user = await db.user.findFirst({
            where: {
              email,
            },
          });

          if (!user) {
            throw new TRPCError({
              code: "NOT_FOUND",
              message: "User not found",
            });
          }

          const isValidPassword = await compare(password, user.password);

          if (!isValidPassword) {
            throw new TRPCError({
              code: "UNAUTHORIZED",
              message: "Invalid Credentials",
            });
          }

          return {
            id: user.id,
          };
        } catch (error) {
          if (error instanceof TRPCError) {
            throw error;
          } else {
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
              cause: error,
            });
          }
        }
      },
    }),
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
