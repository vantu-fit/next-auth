import authConfig from "./auth.config"
import NextAuth from "next-auth"
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, publicRoutes } from '@/route'
const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const isLogin = !!req.auth
    const { nextUrl } = req
    const isApiAuthRoute = req.nextUrl.pathname.startsWith(apiAuthPrefix)
    const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname)
    const isAuthRoute = authRoutes.includes(req.nextUrl.pathname)

    // console.log(nextUrl.toString())
    // console.log("IsLogin ", isLogin)

    if (isApiAuthRoute) {
        return null
    }

    if (isAuthRoute) {
        if (isLogin) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.nextUrl))
        }

        return null 
    }

    if (!isLogin && !isPublicRoute) {
        return Response.redirect(new URL("/auth/login" , req.nextUrl))
    }

    return null
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image/favicon.ico).*)"]
}
