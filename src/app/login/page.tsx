
import React, { useEffect, useState } from 'react'
import FormLogin from '../components/FormLogin/FormLogin'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import Form from '../components/FormLogin/form'

const LoginPage =  async() => {
  
  const session = await getServerSession()

  if (session) {
    redirect("/")
  }
  return (
    <div>
      <Form/>
    </div>
  )
}

export default LoginPage