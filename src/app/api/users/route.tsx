import { userAgent } from "next/server"
import prisma from "../../../../prisma/client"
import { getServerSession } from 'next-auth/next'
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, response: NextResponse) {

    const body = await request.json()
    const user = prisma.user.findMany()
    
   
    return null
}