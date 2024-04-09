import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function POST(request: NextRequest) {

  const data = await request.json()
  const { email , password } = data
  console.log("Rota" , data)

  if (!email || !password ){
    return NextResponse.json("dadaos invalidos", { status: 400})

  }

  const isUserExists = await prisma.user.findUnique({
    where: {
      email: email
    }
  })

  if (isUserExists){
  return NextResponse.json({error : "email ja existente "}, {status: 400})}
}