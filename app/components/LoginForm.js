'use client'
import { useMemo, useState } from "react";
import React from "react";
import { Input } from "@nextui-org/react";
import { MailIcon } from './icons/MailIcon';
import { EyeFilledIcon } from "./icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./icons/EyeSlashFilledIcon";
import { Divider } from "@nextui-org/react";
import { FaGooglePlusG } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { Spinner } from "@nextui-org/react";


const LoginForm = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginbtntext, setLoginBtnText] = useState("Sign in");
    const [loginbtndisable, setBtnDisable] = useState(false);


    const [value, setValue] = useState();
    const [isEmailInvalid, setEmailInValid] = useState(false);
    const [isUsernameInvalid, setUsernameInValid] = useState(false);
    const [isPasswordInvalid, setPassInValid] = useState(false)
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoginBtnText('Loading ..');
        setBtnDisable(true);
        const formData = {
            "username": username,
            "password": password,
            "redirect": false,

        }
        const result = await signIn("credentials", formData);

        if (!result.error) {
            router.push("/"); // Redirect to homepage or any desired page
        } else {
            // Handle sign-in error
            alert(result.error);
            setUsernameInValid(true);
            console.error("Sign-in error:", result.error);
        }
        setLoginBtnText('Sign in');
        setBtnDisable(false);
    };

    if (session) {
        router.push("/");
    }


    return (
        <form onSubmit={handleSignIn} className="dark flex flex-col flex-grow w-3/4 h-1/2 items-center justify-around sm:w-3/4 md:w-1/2">
            {/* 
            <Input type="email" label="Email" placeholder="Enter your email"
                isClearable
                variant="flat"
                size="lg"
                isRequired
                radius="sm"
                //color="primary"
                isEmailInvalid={isEmailInvalid}
                color={isEmailInvalid ? "danger" : "primary"}
                errorMessage={isEmailInvalid && "Please enter a valid email"}
                onValueChange={setValue}
                classNames={{
                    label: "text-white",
                    input: ["text-white", "placeholder:text-white/60"],
                    inputWrapper: ["text-white"],
                    errorMessage: ["text-md"]
                }}
            /> */}


            <Input type="text" label="User Name" placeholder="Enter your user name"
                isClearable
                variant="flat"
                size="lg"
                isRequired
                radius="sm"
                //color="primary"
                isUsernameInvalid={isUsernameInvalid}
                color={isUsernameInvalid ? "danger" : "primary"}
                errorMessage={isUsernameInvalid && "Your Username or Password maybe incorrect!"}
                //onValueChange={setValue}
                value={username}
                //onValueChange={(e) => setUsername(value)}
                onChange={(e) => { setUsername(e.currentTarget.value) }}
                classNames={{
                    label: "text-white",
                    input: ["text-white", "placeholder:text-white/60"],
                    inputWrapper: ["text-white"],
                    errorMessage: ["text-md"]
                }}
            />

            <Input
                label="Password"
                variant="flat"
                size="lg"
                isRequired
                radius="sm"
                value={password}
                //onValueChange={(e) => setPassword(value)}
                onChange={(e) => { setPassword(e.currentTarget.value) }}
                placeholder="Enter your password"
                isPasswordInvalid={isPasswordInvalid}
                color={isPasswordInvalid ? "danger" : "primary"}
                errorMessage={isPasswordInvalid && "Your Password doesn't follow the format!"}
                classNames={{
                    label: "text-white",
                    input: ["text-white", "placeholder:text-white/60"],

                }}
                endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button>
                }
                type={isVisible ? "text" : "password"}

            />


            <button disabled={loginbtndisable ? 'disabled' : undefined} type="submit" className="w-full h-10 sm:h-12  bg-[#F4A261] hover:border-white hover:border-2 rounded-md sm:text-lg sm:w-full font-medium flex flex-row items-center justify-center"  > {loginbtndisable && <Spinner size="md" color="primary" className="mr-1" />}  {loginbtntext} </button>


            {/*  <button className="w-full h-12  bg-black hover:border-white hover:border-2 rounded-md sm:text-xl sm:w-full font-medium"> {FaGooglePlusG} Sign in with Google</button> */}

            <button type="button" className="text-white w-full h-10 sm:h-12 bg-black hover:border-white hover:border-2 rounded-md  font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center justify-between "><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign in with Google<div></div></button>

            <div className="w-full flex flex-row items-center justify-between">
                <Divider className="w-1/5 md:w-1/3" />
                <p className="ml-0.25 mr-0.25 text-sm sm:text-md text-center">Don&apos;t have an account? <span className="font-bold"><Link href='/register'>Sign up</Link></span></p>
                <Divider className="w-1/5 md:w-1/3" />
            </div>
        </form>
    );
}

export default LoginForm;