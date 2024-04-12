import React from 'react'
import RegisterForm from '../components/FormRegister/FormRegister'
import { getServerSession } from 'next-auth/next'
import Router from 'next/router'
import { redirect } from 'next/navigation'

const RegisterPage = async () => {
  const session = await getServerSession()
  if (session) {
    redirect("/")
  }
  return (
    <div>
      <RegisterForm/>
    </div>
  )
}

export default RegisterPage