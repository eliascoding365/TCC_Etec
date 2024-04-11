import { getServerSession } from 'next-auth'
import React, { useEffect, useState } from 'react'
import { redirect, useRouter } from 'next/navigation'
import Logout from '../logout'

  
  


const UserPage = async() => {
  const session = await getServerSession()
  
  if (!session) {
    redirect("/login")
  }

  return (
    <div className='flex flex-col items-center mt-10'>
      <div>You are signed as </div>
      <div>
        <Logout/>
      </div>
    </div>

  )
}

export default UserPage