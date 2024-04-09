import NextAuth from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import prisma from "../../../../../prisma/client";
import { compare } from "bcrypt";
import bcrypt from "bcrypt"

const handler = NextAuth({
    session: {
      strategy: 'jwt'
    },
    pages: {
      signIn: "/login"
    },
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { },
          password: { },
        },
        async authorize(credentials, req) {
            console.log(credentials)
            // Aqui você faria a chamada para sua API para verificar as credenciais
            if (!credentials?.email || !credentials?.password) return null
            const response = await fetch('api/login', {
             
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(credentials),
            });
            const getUser = await prisma.user.findUnique({
              where: { email: credentials.email}
            })!;

            if (!getUser) {
                console.log("Email não existente")
              return null;
          }

            const unhashPassword = await bcrypt.compare(credentials.password , getUser.password)
            const data = await response.json();
            
            if (response.ok) {
              return data
            } else {
              return null;
            }
          },
        }),
      ],
    });


export { handler as GET, handler as POST}