'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sRmiNaQNwsL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useForm } from 'react-hook-form'
import { HiOutlineExclamationCircle } from "react-icons/hi";
import axios from "axios"
import { z } from "zod"
import { redirect, useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUserSchema } from "@/app/validationSchemas"
import { getServerSession } from "next-auth";
import ErrorMessage from "../ErrorMessage"

type RegisterFormSchema = z.infer<typeof registerUserSchema> //isso vai ligar o schema com a interface, sem ter que alterar os dois, apenas um

export default function FormRegister() {


  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerUserSchema)
  })

  const onSubmit = async (data: RegisterFormSchema) => {
    try {
      await axios.post('api/register', data);
      router.back();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <div className="mx-auto my-20 max-w-sm space-y-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
      >

        <div className="space-y-2 text-center mb-10">
          <span className="text-3xl font-bold">Registrar em <span className="text-3xl border-b-[4px] border-black">VagaNet</span></span>
          <p className="text-gray-500 dark:text-gray-400">Enter your information to create an account</p>
        </div>
        <div className="space-y-2 mb-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register('name')} placeholder="Seu nome" />
          <ErrorMessage>
            {errors.name?.message}
          </ErrorMessage>
        </div>
        <div className="space-y-2 mb-6">
          <Label htmlFor="email">Email</Label>
          <Input id="email" {...register('email')} placeholder="Seu email" />
          <ErrorMessage>
            {errors.email?.message}
          </ErrorMessage>
        </div>
        <div className="space-y-2 mb-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" {...register('password')} type="password" />
          <ErrorMessage>
            {errors.password?.message}
          </ErrorMessage>
        </div>
        <div className="space-y-2 mb-6">
          <Label htmlFor="password">Confirm password</Label>
          <Input id="confirm" {...register('confirm')} type="password" />
          <ErrorMessage>
            {errors.confirm?.message}
          </ErrorMessage>
        </div>
        <div className="flex items-center mt-8 mb-6">
          <Checkbox id="terms" />
          <Label className="ml-2 leading-none" htmlFor="terms">
            Eu concordo com os <Label />
            <Link className="underline" href="/agreement-terms">
              termos de VagaNet
            </Link>
          </Label>
        </div>
        <Button className="w-full bg-blue-600 hover:bg-blue-500 transition-colors">Registrar</Button>
      </form>
    </div>
  )
}