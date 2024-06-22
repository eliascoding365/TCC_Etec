'use client'
import React, { useState } from 'react'
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from 'next-auth/react'
import { loginUserSchema } from "@/app/validationSchemas"
import { z } from "zod"
import { useRouter } from 'next/navigation';
import ErrorMessage from '../ErrorMessage'

type LoginFormSchema = z.infer<typeof loginUserSchema>

const Form = () => {
  const [errorMessage, setErrorMessage] = useState('');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginUserSchema)
  })
  const router = useRouter()

  const onSubmit = async (data: LoginFormSchema) => {
    try {
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (response?.ok) {
        router.refresh();
      } else {
        setErrorMessage('Email ou senha incorretos!');
      }

      console.log(response)
    } catch (error) {
      console.error('Login failed', error)
      setErrorMessage('Houve um erro em nosso servidor, teste novamente.');
    }
  }

  return (
    <div className="mx-auto my-20 max-w-sm h-full space-y-6">
      <CardHeader className="text-center pb-0 mb-4">
        <CardTitle className="text-3xl font-bold">Login</CardTitle>
        <CardDescription>Entre com seu email abaixo para logar com sua conta.</CardDescription>
      </CardHeader>
      <form
        className="space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="email@exemplo.com"
            type="email"
            {...register("email")}
            
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            {...register("password")}
            placeholder="•••••"
          />
        </div>
        {errorMessage && (
          <>
          <ErrorMessage>{errorMessage}</ErrorMessage></>
        )}
        <footer className="flex justify-center">
          <Button className="w-full bg-blue-600 hover:bg-blue-500 transition-colors">Login</Button>
        </footer>
      </form>
      <div className="mb-4 mt-4 text-center text-sm ">
        Não tem uma conta ?<span> </span>
        <Link className="underline" href="/register">
          Registre-se!
        </Link>
      </div>
    </div>
  )
}

export default Form
