import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod'
import prisma from "../../../../prisma/client";

const createVagaSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1)
})

export async function POST(request: NextRequest){
  const body = await request.json()
  const validation = createVagaSchema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400})

  const newVaga = await prisma.vaga.create({
    data: { name: body.name, description: body.description}
  })  

  return NextResponse.json(newVaga, {status: 201})
}