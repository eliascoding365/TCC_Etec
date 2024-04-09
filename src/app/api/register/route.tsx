import { NextRequest, NextResponse} from 'next/server'
import prisma
from '../../../../prisma/client'
import {hash} from 'bcrypt'
import { registerUserSchema } from '../../validationSchemas'

export async function POST(request: NextRequest) {
  try {

    const body = await request.json()//requisicao pega os dados do form
    console.log(body)
    const hashPassword = await hash(body.password , 10)//hasheia as senhas da requisicao 
    const hashConfPassword = await hash(body.confirm, 10)
    
    const validation = registerUserSchema.safeParse(body)//confere o schema com os dados de body
    if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400})
  
  const newUser = await prisma.user.create({
    data: {name: body.name, email: body.email, password: hashPassword, confirm: hashConfPassword}
  }) //cria um usuario no banco
  console.log(newUser)
  
  return NextResponse.json(newUser, {status: 201})
} catch(e){
  console.log({e})
}
}