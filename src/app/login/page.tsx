
import React, { useEffect, useState } from 'react'
import FormLogin from '../components/FormLogin/FormLogin'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import Form from '../components/FormLogin/form'
import { Metadata } from 'next'

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

export const metadata: Metadata = {
  title: 'VagaNet - Entrar',
  description: 'Um projeto que reune pessoas que procuram pequenos serviços'
}