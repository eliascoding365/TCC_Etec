import { getServerSession } from 'next-auth'
import React, { useEffect, useState } from 'react'
import { redirect, useRouter } from 'next/navigation'
import Logout from '../logout'
import prisma from '../../../prisma/client'

  
  


const UserPage = async() => {
  const session = await getServerSession()
  
  if (!session) {
    redirect("/login")
  }
  const user = await prisma.user.findUnique({
    where: {
      email: session.user?.email,
    },
  });
  return (
    <div className='flex flex-col items-center mt-10'>
      <div>Você esta conectado como {session.user?.email}</div>
      <p>{user?.name}</p>
      <div>
        <Logout/>
      </div>
    </div>

  )
}

export default UserPage