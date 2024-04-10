'use client'
import React, { useEffect, useState } from 'react'
import FormLogin from '../components/FormLogin/FormLogin'
import { redirect, useRouter } from 'next/navigation'
import { getSession } from 'next-auth/react'
import Form from '../components/FormLogin/form'
import { Session } from 'next-auth'

const LoginPage =  () => {
  const router = useRouter()

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const sessionData = await getSession(); // Fetch session from the server
        setSession(sessionData);
        console.log(sessionData)
      } catch (error) {
        console.error('Error fetching server session:', error);
      }
    };

    fetchSession();
  }, []);

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