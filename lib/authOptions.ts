import type { NextAuthConfig } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import userLogIn from "./userLogIn"
import { Session } from "next-auth"


export const authOptions:NextAuthConfig={
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{
                email:{
                    label:"Email",
                    type:"email",
                    placeholder:"email"
                },
                password:{
                    label:"Password",
                    type:"password"}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid credentials")
                }
                const user = await userLogIn(credentials.email.toString(), credentials.password.toString())
                if (user) {
                    return user
                  } else {
                    return null
                  }
                }
            })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user }
        },
       async session({ session, token,user }) {
            session.user = token as any
            return session
        }
    } 
}