'use client'
import React from 'react'
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

type LoginFormSchema = z.infer<typeof loginUserSchema>


const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginUserSchema)
  })

  const onSubmit = async (data: LoginFormSchema) => {
    
    try {
      await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
    } catch (error) {
      console.error('Login failed', error)
    }
  }

  return (
    <div className="mx-auto my-20 max-w-sm h-full space-y-6">
      <CardHeader className="text-center pb-0 mb-4">
        <CardTitle className="text-3xl font-bold">Login</CardTitle>
        <CardDescription>Enter your email below to login to your account.</CardDescription>
      </CardHeader>
      <form
        className="space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="e@exemplo.com"
            type="email"
            {...register("email")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            {...register("password")}
          />
        </div>
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