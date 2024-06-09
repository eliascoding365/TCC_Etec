'use client'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUserSchema } from "@/app/validationSchemas";
import ErrorMessage from "../ErrorMessage";
import Spinner from "../Spinner";
import { useState } from "react";

type RegisterFormSchema = z.infer<typeof registerUserSchema>;

export default function FormRegister() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerUserSchema)
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: RegisterFormSchema) => {
    try {
      setIsSubmitting(true);
      await axios.post('api/register', data);
      router.back();
    } catch (error) {
      setIsSubmitting(false);
      console.error("Error submitting form:", error);
    }
  };

  const name = watch("name");
  const email = watch("email");
  const password = watch("password");
  const confirm = watch("confirm");

  return (
    <div className="mx-auto my-20 max-w-sm space-y-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2 text-center mb-10">
          <span className="text-3xl font-bold">Registrar em <span className="text-3xl border-b-[4px] border-black">VagaNet</span></span>
          <p className="text-gray-500 dark:text-gray-400">Entre com suas informações para cadastro</p>
        </div>
        <div className="space-y-2 mb-2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" {...register('name')} placeholder="Seu nome" />
          {name && name.length < 3 && <ErrorMessage>Campo nome precisa ter 3 letras</ErrorMessage>}
        </div>
        <div className="space-y-2 mb-6">
          <Label htmlFor="email">Email</Label>
          <Input id="email" {...register('email')} placeholder="Seu email" />
          {email && !/\S+@\S+\.\S+/.test(email) && <ErrorMessage>Informe um email válido</ErrorMessage>}
        </div>
        <div className="space-y-2 mb-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" {...register('password')} type="password" />
          {password && password.length < 5 && <ErrorMessage>Campo senha precisa ter 5 letras</ErrorMessage>}
        </div>
        <div className="space-y-2 mb-6">
          <Label htmlFor="confirm">Confirme sua senha</Label>
          <Input id="confirm" {...register('confirm')} type="password" />
          {password && confirm && password !== confirm && <ErrorMessage>Senhas divergentes</ErrorMessage>}
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
        <Button disabled={isSubmitting} className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-500 transition-colors">
          Registrar {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
}
