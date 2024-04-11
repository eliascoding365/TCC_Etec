import React, { useEffect, useState } from 'react'
import FormLogin from '../components/FormLogin/FormLogin'
import { redirect, useRouter } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import Form from '../components/FormLogin/form'
import { Session } from 'next-auth'

const LoginPage = async () => {
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