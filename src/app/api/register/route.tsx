import { NextRequest, NextResponse} from 'next/server'
import { z } from 'zod'
import prisma
from '../../../../prisma/client'

//create schema using zod 
const registerUserSchema = z.object({
  name: z.string().min(3), 
  email: z.string().min(3),
  password: z.string().min(2), 
  confirm: z.string(),
})

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = registerUserSchema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400})
  
  const newUser = await prisma.user.create({
    data: {name: body.name, email: body.email, password: body.password, confirm: body.confirm}
  })
  
  console.log(newUser)
  return NextResponse.json(newUser, {status: 201})

}