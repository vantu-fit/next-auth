"use server"
import { db } from "@/lib/db"
import bcrypt from "bcryptjs"
import { sendResetPasswordEmail } from "@/lib/mail"
import { generateResetToken } from "@/lib/token"

export const sendmailPassword = async (email: string) => {
    const existingUser = await db.user.findUnique({
        where: {
            email
        }
    })

    if (!existingUser) {
        return {
            error: "User not found"
        }
    }

    const resetPasswordToken = await generateResetToken(email)

    await sendResetPasswordEmail(resetPasswordToken.email, resetPasswordToken.token)

    return {
        success: "Reset password email sent !!!"
    }

}

export const resetPassword = async (newPassword : string , token : string) => {

    if (!token) {
        return {
            error: "Invalid token"
        }
    }

    const existingToken = await db.resetPasswordToken.findUnique({
        where: {
            token
        }
    })

    if (!existingToken) {
        return {
            error: "Invalid token"
        }
    }

    const existingUser = await db.user.findUnique({
        where: {
            email: existingToken.email
        }
    })

    if (!existingUser) {
        return {
            error: "User not found"
        }
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10) 

    await db.user.update({
        where: {
            email: existingToken.email
        },
        data: {
            password: hashedNewPassword
        }
    })

    await db.resetPasswordToken.delete({
        where: {
            token
        }
    })

    return {
        success: "Password reseted successfully"
    }

}