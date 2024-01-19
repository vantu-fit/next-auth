import * as z from 'zod'

export const loginFormSchema = z.object({
    email: z.string().min(5),
    password: z.string().min(5),
})

export const registerFormSchema = z.object({
    name: z.string().min(5),
    email: z.string().min(5),
    password: z.string().min(5),
})

export const sendmailPassWordSchema = z.object({
    email: z.string()
})

export const resetPasswordSchema = z.object({
    password: z.string(),
})