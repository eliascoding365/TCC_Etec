import { NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { signIn } from 'next-auth/react';

const prisma = new PrismaClient();

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    console.log(email , password)
    // Consulta o usuário no banco de dados usando Prisma
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Autentica o usuário usando NextAuth.js
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password
    });

    if (result?.error) {
      return res.status(401).json({ message: 'Falha ao autenticar' });
    }

    // Se autenticado com sucesso, retorna um token de acesso
    return res.status(200).json({ token: result?.ok  });
  } else {
    return res.status(405).json({ message: 'Método não permitido' });
  }
}
