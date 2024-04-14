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

const Register = () => {
    return (
        <form className="w-full flex flex-col justify-start  ">


            <fieldset className="flex flex-row items-center justify-around flex-grow w-[90%]">
                <Input type="text" label="First Name" placeholder="Enter your first name"
                    isClearable
                    variant="flat"
                    size="lg"
                    isRequired
                    radius="sm"
                    color="primary"
                    //isUsernameInvalid={isUsernameInvalid}
                    //color={isUsernameInvalid ? "danger" : "primary"}
                    //errorMessage={isUsernameInvalid && "Your Username or Password maybe incorrect!"}
                    //onValueChange={setValue}
                    //value={username}
                    //onValueChange={(e) => setUsername(value)}
                    //onChange={(e) => { setUsername(e.currentTarget.value) }}
                    classNames={{
                        label: "text-white",
                        input: ["text-white", "placeholder:text-white/60"],
                        inputWrapper: ["text-white"],
                        errorMessage: ["text-md"]
                    }}
                    className="mr-2"
                />

                <Input type="text" label="Last Name" placeholder="Enter your last name"
                    isClearable
                    variant="flat"
                    size="lg"
                    isRequired
                    radius="sm"
                    color="primary"
                    // isUsernameInvalid={isUsernameInvalid}
                    //color={isUsernameInvalid ? "danger" : "primary"}
                    //rrorMessage={isUsernameInvalid && "Your Username or Password maybe incorrect!"}
                    //onValueChange={setValue}
                    //value={username}
                    //onValueChange={(e) => setUsername(value)}
                    //onChange={(e) => { setUsername(e.currentTarget.value) }}
                    classNames={{
                        label: "text-white",
                        input: ["text-white", "placeholder:text-white/60"],
                        inputWrapper: ["text-white"],
                        errorMessage: ["text-md"]
                    }}

                />
            </fieldset>

            <Input type="text" label="User Name" placeholder="Enter your user name"
                isClearable
                variant="flat"
                size="lg"
                isRequired
                radius="sm"
                color="primary"
                // isUsernameInvalid={isUsernameInvalid}
                //color={isUsernameInvalid ? "danger" : "primary"}
                //rrorMessage={isUsernameInvalid && "Your Username or Password maybe incorrect!"}
                //onValueChange={setValue}
                //value={username}
                //onValueChange={(e) => setUsername(value)}
                //onChange={(e) => { setUsername(e.currentTarget.value) }}
                classNames={{
                    label: "text-white",
                    input: ["text-white", "placeholder:text-white/60"],
                    inputWrapper: ["text-white"],
                    errorMessage: ["text-md"]
                }}
                className="mt-2 w-[90%]"
            />

            <Input type="email" label="Email" placeholder="Enter your email"
                isClearable
                variant="flat"
                size="lg"
                isRequired
                radius="sm"
                color="primary"
                //isEmailInvalid={isEmailInvalid}
                //color={isEmailInvalid ? "danger" : "primary"}
                //errorMessage={isEmailInvalid && "Please enter a valid email"}
                //onValueChange={setValue}
                classNames={{
                    label: "text-white",
                    input: ["text-white", "placeholder:text-white/60"],
                    inputWrapper: ["text-white"],
                    errorMessage: ["text-md"]
                }}
                className="mt-2 w-[90%]"
            />




        </form>
    );
}

export default Register;