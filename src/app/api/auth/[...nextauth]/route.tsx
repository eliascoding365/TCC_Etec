import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../prisma/client";
import { compare } from "bcrypt";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user?.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { },
        password: { },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;

        const getUser = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!getUser) {
          console.log("Email not found");
          return null;
        }

        const isValidPassword = await compare(credentials.password, getUser.password);
        console.log(isValidPassword);

        if (isValidPassword) {
          return {
            id: getUser.id.toString(),
            email: getUser.email,
          };
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
