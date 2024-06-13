import React from 'react'
import RegisterForm from '../components/FormRegister/FormRegister'
import { getServerSession } from 'next-auth/next'
import Router from 'next/router'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'

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

export const metadata: Metadata = {
  title: 'VagaNet - Registro',
  description: 'Um projeto que reune pessoas que procuram pequenos serviços'
}