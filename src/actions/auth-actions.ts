"use server"

import { loginFormSchema, registerFormSchema } from '@/schema/auth-schema'
import * as z from 'zod'
import bcrypt from 'bcryptjs'
import { db } from '@/lib/db'
import { signIn } from '@/auth'
import { AuthError } from 'next-auth'
import { generateVerificationToken } from '@/lib/token'
import { sendVerificarionEmail } from '@/lib/mail'
import { getTokenByEmail, getTokenByToken } from '@/data/verification-token'

export const registerEmail = async (data: z.infer<typeof registerFormSchema>) => {
    const validateFields = registerFormSchema.safeParse(data)

    if (!validateFields.success) {
        return {
            error: "Invalid Fields"
        }
    }

    const { email, password, name } = data

    const hashPassword = await bcrypt.hash(password, 10)

    const existingUser = await db.user.findUnique({ where: { email } })

    if (existingUser) {
        return {
            error: "User already exists"
        }
    }

    await db.user.create({
        data: {
            email,
            name,
            password: hashPassword
        }
    })

    const verification = await generateVerificationToken(email)

    await sendVerificarionEmail(verification.email, verification.token)

    return {
        success: "Cofirmation email sents !!!"
    }

}

export const loginEmail = async (data: z.infer<typeof loginFormSchema>) => {
    const validateFields = loginFormSchema.safeParse(data)

    let { email, password } = data

    if (!validateFields.success) {
        return {
            error: "Invalid Fields"
        }
    }

    email = email.toLowerCase()

    const existingUser = await db.user.findUnique({ where: { email } })

    if (!existingUser) {
        return {
            error: "User not found"
        }
    }

    const isVerification = !!existingUser.emailVerified

    if (!isVerification) {
        if (!existingUser.email) return { error: "Something went wrong" }
        const verificationToken = await generateVerificationToken(existingUser.email)
        await sendVerificarionEmail(verificationToken.email, verificationToken.token)
        return {
            success: "Please verify your email"
        }
    }

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: "http://localhost:3000/setting"
        })
    }

    catch (error) {
        if (error instanceof AuthError) {
            if (error.type === "CredentialsSignin") {
                console.log("Auth Error")
                return {
                    error: "Invalid Credentials"
                }
            }
            return {
                error: "Something went wrong"
            }
        }
        throw error
    }

    return {
        success: "Logged In"
    }

}

export const loginProvider = async (provider: "google" | "github") => {
    try {
        await signIn(provider, {
            redirectTo: "http://localhost:3000/setting"
        })
    }
    catch (error) {
        throw error

    }
}
