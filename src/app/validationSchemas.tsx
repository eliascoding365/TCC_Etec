import { z } from 'zod';

//can extend more schemas in the future
export const registerUserSchema = z.object  ({
  name: z.string().min(3),
  email: z.string().min(3),
  password: z.string().min(2),
  confirm: z.string().min(3),
}).refine((data) => data.password === data.confirm, {
  message: "Senhas divergentes",
  path: ["confirm"],
});

export const loginUserSchema = z.object ({
  email: z.string(),
  password: z.string(),
})