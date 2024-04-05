'use client'
import { useMemo, useState } from "react";
import React from "react";
import { Input } from "@nextui-org/react";
import { MailIcon } from './icons/MailIcon';
import { EyeFilledIcon } from "./icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./icons/EyeSlashFilledIcon";

const LoginForm = () => {

    const [value, setValue] = useState();
    const [isInvalid, setValid] = useState(false);
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);





    return (
        <div className="dark flex flex-col flex-grow w-3/4 items-center mt-5 justify-around sm:w-1/2">

            <Input type="email" label="Email" placeholder="Enter your email"
                isClearable
                variant="flat"
                size="lg"
                isRequired
                radius="sm"
                //color="primary"
                isInvalid={isInvalid}
                color={isInvalid ? "danger" : "primary"}
                errorMessage={isInvalid && "Please enter a valid email"}
                onValueChange={setValue}
                classNames={{
                    label: "text-white",
                    input: ["text-white", "placeholder:text-white/60"],

                }}
            />

            <Input
                label="Password"
                variant="flat"
                size="lg"
                isRequired
                radius="sm"
                placeholder="Enter your password"
                color="primary"
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

            <button className="w-1/2 h-12  bg-[#F4A261] hover:border-white hover:border-2 rounded-md sm:text-xl font-medium">Login</button>

        </div>
    );
}

export default LoginForm;