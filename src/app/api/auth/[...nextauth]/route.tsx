import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import axios from 'axios';
import prisma from '../../../../../prisma/client';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: '/login',
  },

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials, req) {
        console.log('as')

        if (!credentials?.email || !credentials?.password) return null;
        console.log('as')
        try {
          // Faça a verificação do usuário e senha
          const response = await axios.post('/api/login', credentials);
          const allUser = await prisma.user.findMany()
          const data = response.data;
          console.log('first')
          if (data && data.user) {
          console.log('sec')

              const passwordMatch = await compare(credentials.password, data.password); // Comparando senha fornecida com senha hash armazenada no banco de dados
              if (passwordMatch) {
                return null
            } else {
              return null; // Senha incorreta
            }
          } else {
            return null; // Usuário não encontrado
          }
        } catch (error) {
          console.error('Erro ao autenticar:', error);
          return null; // Tratar erros de forma apropriada
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST}
