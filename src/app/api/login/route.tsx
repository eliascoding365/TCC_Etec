import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
import { signIn } from 'next-auth/react';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  if (req.method === 'POST') {
    try {
      const body = await req.json();

      const { email, password } = body;

      if (!email || !password) {
        return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
      }

      const user = await prisma.user.findUnique({
        where: { email }
      });

      if (!user || user.password !== password) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
      }

      const result = await signIn('credentials', {
        redirect: false,
        email,
        password
      });

      if (result?.error) {
        return NextResponse.json({ message: 'Authentication failed' }, { status: 401 });
      }

      return NextResponse.json({ token: result?.ok }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }
}
