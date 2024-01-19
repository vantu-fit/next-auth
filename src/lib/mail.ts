"use server"
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export const sendVerificarionEmail = async (email: string, token: string) => {
    const cofirmLink = `http://localhost:3000/auth/new-verification?token=${token}`
    await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [email],
        subject: "Please verify your email",
        html: `<p> Click <a href="${cofirmLink}">here</a> to verify your email </p>`
    })

}


export const sendResetPasswordEmail = async (email: string, token: string) => {
    const cofirmLink = `http://localhost:3000/auth/reset-password?token=${token}`
    await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [email],
        subject: "Please reset your password",
        html: `<p> Click <a href="${cofirmLink}">here</a> to reset your password </p>`
    })
}