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
import axios from "axios"
import { ZodType,  z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

interface RegisterUserProps {
  name: string,
  email: string,
  password: string,
  confirm: string,
}

const schema: ZodType<RegisterUserProps> = z.object
  ({
    name: z.string().min(3),
    email: z.string().min(3),
    password: z.string().min(2),
    confirm: z.string().min(3),
  }).refine((data) => data.password === data.confirm, {
    message: "Senhas divergentes",
    path: ["confirm"],
  });


const RegisterForm = () => {
  const { 
    register,
     handleSubmit,
     formState:{errors},
    } = useForm<RegisterUserProps>({
    resolver: zodResolver(schema)
  })

  return (
    <div className="mx-auto my-20 max-w-sm space-y-6">
      <form
        onSubmit={handleSubmit(async (data: RegisterUserProps) =>
          await axios.post('api/register', data)
        )}
      >

        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Register</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your information to create an account</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register('name')} placeholder="Seu nome" required />
          {errors.name && <span className='text-red-400 text-sm'>{errors.name.message}</span>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" {...register('email')} placeholder="Seu email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" {...register('password')} required type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Confirm password</Label>
          <Input id="confirm" {...register('confirm')} required type="password" />
          {errors.confirm && <span className='text-red-400 text-sm'>{errors.confirm.message}</span>}
        </div>
        <div className="flex items-center mt-8 mb-4">
          <Checkbox id="terms" required />
          <Label className="ml-2 leading-none" htmlFor="terms">
            Eu concordo com os <Label />
            <Link className="underline" target="_blank" href="/agreement-terms">
              termos de VagaNet
            </Link>
          </Label>
        </div>
        <Button className="w-full bg-blue-600">Register</Button>
      </form>
    </div>
  )
}
export default RegisterForm