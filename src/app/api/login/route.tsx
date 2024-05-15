import { NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { signIn } from 'next-auth/react';

const prisma = new PrismaClient();

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    console.log(email , password)

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password
    });

    if (result?.error) {
      return res.status(401).json({ message: 'Falha ao autenticar' });
    }

    return res.status(200).json({ token: result?.ok  });
  } else {
    return res.status(405).json({ message: 'Método não permitido' });
  }
}
