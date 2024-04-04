import { NextRequest, NextResponse} from 'next/server'
import prisma
from '../../../../prisma/client'
import {hash} from 'bcrypt'
import { registerUserSchema } from '../../validationSchemas'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const hashPassword = await hash(body.password , 10)
  const hashConfPassword = await hash(body.confirm, 10)

  const validation = registerUserSchema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400})
  
  const newUser = await prisma.user.create({
    data: {name: body.name, email: body.email, password: hashPassword, confirm: hashConfPassword}
  })
  console.log(newUser)
  return NextResponse.json(newUser, {status: 201})

}