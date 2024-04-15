import { z } from 'zod';

//can extend more schemas in the future
export const registerUserSchema = z.object  ({
  name: z.string().min(3, 'Campo nome precisa ter 3 letras'),
  email: z.string().email('Informe um email válido').min(3),
  password: z.string().min(2,'Campo senha precisa ter 3 letras'),
  confirm: z.string().min(3,'As senhas precisam ser iguais'),
}).refine((data) => data.password === data.confirm, {
  message: "Senhas divergentes"
});

export const loginUserSchema = z.object ({
  email: z.string(),
  password: z.string(),
})

export const createVagaSchema = z.object ({
  name: z.string(),
  description: z.string(),
})