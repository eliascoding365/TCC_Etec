'use client'
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { signIn } from 'next-auth/react'
import router from "next/router"
import { loginUserSchema } from "@/app/validationSchemas"
import { z } from "zod"

type LoginFormSchema = z.infer<typeof loginUserSchema>

const LoginForm = () => {
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
      console.error("Enviado");

      // Se signIn não lançar uma exceção, significa que a autenticação foi bem-sucedida,
      // então podemos redirecionar o usuário para a página principal.
      router.push("/");
    } catch (error) {
    }
  }

  return (
    <div className="mx-auto my-20 max-w-sm h-full space-y-6">
      <CardHeader className="text-center pb-0">
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
        Don't have an account? 
        <Link className="underline" href="/register">
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default LoginForm
