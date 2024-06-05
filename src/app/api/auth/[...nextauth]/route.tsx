import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../prisma/client";
import { compare } from "bcrypt";
import bcrypt from "bcrypt"

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token
        token.id = user?.id
      }
      return token
    },
    session({ session, token }) {
        // I skipped the line below coz it gave me a TypeError
        // session.accessToken = token.accessToken;
        session.user.id = token.id;
  
        return session;
      },
  },
  pages: {
    signIn: "/login"
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        // Aqui você faria a chamada para sua API para verificar as credenciais
        if (!credentials?.email || !credentials?.password) return null

        const getUser = await prisma.user.findUnique({
          where: { email: credentials.email }
        })!;

        if (!getUser) {
          console.log("Email não existente")
          return getUser;
        }

        const unhashPassword = await bcrypt.compare(credentials.password, getUser.password)
        console.log(unhashPassword)
        if (unhashPassword) {
          return {
            id: getUser.id,
            email: getUser.email
          }
        }
        return null
      },
    }),
  ],
});


export { handler as GET, handler as POST }