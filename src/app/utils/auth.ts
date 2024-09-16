import { PrismaAdapter } from "@auth/prisma-adapter"

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { prisma } from "./connect"

// import GithubProvider from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
        // GithubProvider({
        //     clientId:"",
        //     clientSecret:"",
        // })
    ],
})