import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
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
                    if (error.response) {
                        // Server responded with a status other than 200 range
                        if (error.response.data.detail) {
                            // Specific error message from backend
                            throw new Error(error.response.data.detail);
                        } else {
                            // General server error
                            throw new Error("Server error, please try again later.");
                        }
                    } else if (error.request) {
                        // No response from server
                        throw new Error("No response from server, please check your network.");
                    } else {
                        // Other errors
                        throw new Error("An error occurred, please try again.");
                    }
                }
                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            },

        }),
    ],
    pages: { signIn: "/login" }
    ,
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account.provider === "google") {
                try {
                    const response = await axios.post(`${process.env.BACKEND_URL}google/`, {
                        access_token: account.id_token,
                    });

                    // Save the backend response in the `account` object for later use in `jwt` callback
                    account.backendResponse = response.data;
                    //console.log(response.data);

                    if (response.data) {
                        return true;
                    }
                } catch (error) {
                    console.error("Error in Google sign-in handler:", error);
                    return false;
                }
            }
            return true;
        },
        async jwt({ token, user, account }) {
            if (user) {
                token = { ...token, ...user };
            }
            // If the account provider is Google, include additional info
            if (account?.provider === "google" && account.backendResponse) {
                const info = account.backendResponse;
                token = { ...token, info };


            }
            return token;
        },
        async session({ session, token }) {
            session.user = token;
            if (session.user.info) {
                session.user.access = session.user.info.access;
                session.user.refresh = session.user.info.refresh;
            }
            return session;
        },
    },

})

export { handler as GET, handler as POST }