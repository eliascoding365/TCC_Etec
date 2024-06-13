import { NextRequest, NextResponse, userAgent } from "next/server";
import { z } from 'zod'
import prisma from "../../../../prisma/client";
import { getServerSession } from 'next-auth/next'
import { createVagaSchema } from "@/app/validationSchemas";

type createVagaSchema = z.infer<typeof createVagaSchema>

export async function POST(request: NextRequest, response: NextResponse) {
  const session = await getServerSession();
  console.log(session)
  try {
    if (!session || !session.user || !session.user.email) {
      return NextResponse.json({ error: 'Usuário não encontrada' }, { status: 401 });
    }

    const body = await request.json()
    const validation = createVagaSchema.safeParse(body)
    if (!validation.success)
      return NextResponse.json(validation.error.errors, { status: 400 })


    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    console.log({user})
    const newVaga = await prisma.vaga.create({
      data: {
        name: body.name,
        description: body.description,
        createdBy: { connect: { id: user.id } }

      }
    })
    return NextResponse.json(newVaga, { status: 201 })

  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

  }




}


export async function DELETE(request: NextRequest) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Vaga ID is required' }, { status: 400 });
    }

    const vaga = await prisma.vaga.delete({
      where: { id: parseInt(id) }
    });

    if (!vaga) {
      return NextResponse.json({ error: 'Failed to delete vaga' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Vaga deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}