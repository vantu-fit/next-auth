import Credentials from "next-auth/providers/credentials"
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import bcrypt from "bcryptjs"
import type { NextAuthConfig, DefaultSession } from "next-auth"
import { loginFormSchema } from "./schema/auth-schema"
import { getUserByEmail, getUserById } from "./actions/database-action"
import { db } from "./lib/db"

declare module "next-auth" {
    interface Session {
        user: {
            id: string
            role : string
        } & DefaultSession["user"]
    }
}



export default {
    pages: {
        signIn: "/auth/login",
        error: "/auth/error"
    },
    events: {
        async linkAccount({ user }) {
            await db.user.update({
                where: {
                    id: user.id
                },
                data: {
                    emailVerified: new Date()
                }
            })
        }
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider !== "credentials") return true

            const existingUser = await getUserById(user.id)

            if (!existingUser?.emailVerified) return false

            return true

        },
        async jwt({ token, user, account, profile }) {
            if (user) {
                const existingUser = await getUserById(user.id)
                if (!existingUser?.emailVerified) {
                    return null
                }
                token.id = user.id
                token.role = existingUser?.role
            }
            return token
        },
        async session({ session, token }) {
            session.user.id = token.id as string
            session.user.role = token.role as string
            return session
        }

    },
    providers: [
        // OAuth authentication providers...
        Github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        Credentials({
            async authorize(credentials) {
                const validateFields = loginFormSchema.safeParse(credentials)
                if (validateFields.success) {
                    let { email, password } = validateFields.data
                    email = email.toLowerCase()
                    const user = await getUserByEmail(email)
                    if (!user || !user.password) {
                        return null
                    }
                    const matchPassword = await bcrypt.compare(password, user.password)
                    if (matchPassword) {
                        return user
                    }

                }
                return null
            }
        })
    ],
} satisfies NextAuthConfig