"use server"
import { db } from "@/lib/db"
import { getUserByEmail } from "./database-action"

export const getVerificationTokenByToken = async (token: string) => {

    if (!token) {
        return {
            error: "Token not found"
        }
    }
    
    const existingToken = await db.verificationToken.findUnique({
        where: {
            token
        }
    })

    if (!existingToken) {
        return {
            error: "Token not found"
        }
    }

    const hasExpired = new Date() > existingToken.expires

    if (hasExpired) {
        return {
            error: "Token has expired"
        }
    }

    const existingUser = await getUserByEmail(existingToken.email)

    if (!existingUser) {
        return {
            error: "User not found"
        }
    }

    await db.user.update({
        where: {
            email: existingToken.email
        },
        data: {
            emailVerified: new Date() , 
            email : existingToken.email
        }
    })

    await db.verificationToken.delete({
        where: {
            id: existingToken.id
        }
    })

    return {
        success: "Email verified"
    }

}

