
import { signIn } from 'next-auth/react'
import { loginUserSchema } from "@/app/validationSchemas"
import { z } from "zod"
import Form from './form'

type LoginFormSchema = z.infer<typeof loginUserSchema>

const LoginForm = () => {

  return (
    <Form />
  )
}

export default LoginForm
