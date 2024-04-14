import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "username", type: "text", placeholder: "jsmith" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials, req) {
                try {
                    const response = await axios({
                        url: process.env.BACKEND_URL + "token/",
                        method: "post",
                        data: credentials,
                    });
                    const user = response.data;
                    if (user) return user;
                } catch (error) {
                    console.error(error);
                }
                return null;
            },
        })
    ],
    pages: { signIn: "/login" }
    ,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token = { ...token, ...user };
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        },
    },

})

export { handler as GET, handler as POST }