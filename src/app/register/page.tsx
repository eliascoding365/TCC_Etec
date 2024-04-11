import React from 'react'
import RegisterForm from '../components/FormRegister/FormRegister'
import { getSession } from 'next-auth/react'
import Router from 'next/router'
import { redirect } from 'next/navigation'

const RegisterPage = async () => {
  const session = await getSession()
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