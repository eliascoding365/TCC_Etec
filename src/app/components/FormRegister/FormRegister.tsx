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

interface RegisterUserProps {
  name: string,
  email: string,
  password: string,
}
const RegisterForm = () => {
    const { register, handleSubmit } = useForm<RegisterUserProps>()

  return (
    <div className="mx-auto my-20 max-w-sm space-y-6">
      <form
      onSubmit={handleSubmit(async(data)=>
      await axios.post('api/user', data)
        )}
      >

      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Register</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information to create an account</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register('name')} placeholder="Enter your name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" {...register('email')} placeholder="Enter your email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" {...register('password')} required type="password" />
      </div>
      <div className="flex items-center mt-8 mb-4">
        <Checkbox id="terms" />
        <Label className="ml-2 leading-none" htmlFor="terms">
          I agree to the
          <Link className="underline" href="#">
            terms and conditions
          </Link>
        </Label>
      </div>
      <Button className="w-full">Register</Button>
      </form>
    </div>
  )
}
export default RegisterForm