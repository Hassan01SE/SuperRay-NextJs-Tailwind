'use client'
import { useMemo, useState } from "react";
import React from "react";
import { Input } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import { MailIcon } from './icons/MailIcon';
import { EyeFilledIcon } from "./icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./icons/EyeSlashFilledIcon";
import { Divider } from "@nextui-org/react";
import { FaGooglePlusG } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";


const Register = () => {

    const [registerbtndisable, setBtnDisable] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const router = useRouter();
    const { data: session, status } = useSession();

    if (session) {
        router.push("/");
    }


    const initialValues = {
        username: "",
        email: "",
        password: "",
        password2: "",
        phone_number: "",
        sex: "",
        user_type: "STANDARD_USER",
        first_name: "",
        last_name: ""
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().required("Password is required").min(6),
        password2: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
        phone_number: Yup.string().required("Phone number is required"),
        sex: Yup.string().required("Gender is required"),
        first_name: Yup.string().required("First name is required"),
        last_name: Yup.string().required("Last name is required")
    });

    const handleSubmit = async (values, actions) => {
        //e.preventDefault();
        console.log(values);
        setBtnDisable(true);
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}register/`, values);
            // Handle success
            console.log("User registered successfully!");
            alert('success');
            router.push('/login');
        } catch (error) {
            // Handle error
            console.error("Registration failed:", error);
            if (error.response.status === 500) {
                alert('Server Error, try later!');
            }
            else if (error.response.status === 400) {
                alert('Bad Request, Username may already exist!');
            }
            else {
                alert('Something went wrong..');
            }
        }
        finally {
            setBtnDisable(false);
        }
    };

    return (

        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}

            >
                {({ errors, touched }) => (
                    <Form id="desktopversion" className="hidden dark w-full sm:flex flex-col justify-start   ">


                        <fieldset className="flex flex-row items-center justify-around flex-grow w-[90%]">

                            <Field name="first_name">
                                {({ field }) => (
                                    <Input type="text" name="first_name" label="First Name" placeholder="Enter your first name"
                                        {...field}
                                        isClearable
                                        variant="flat"
                                        size="md"
                                        isRequired
                                        radius="sm"
                                        color="primary"
                                        //isUsernameInvalid={isUsernameInvalid}
                                        //color={errors.first_name ? "danger" : "primary"}
                                        //errorMessage={isUsernameInvalid && "Your Username or Password maybe incorrect!"}
                                        //onValueChange={setValue}
                                        //value={username}
                                        //onValueChange={(e) => setUsername(value)}
                                        //onChange={(e) => { setUsername(e.currentTarget.value) }}
                                        errorMessage={errors.first_name && touched.first_name && errors.first_name}
                                        classNames={{
                                            label: "text-white",
                                            input: ["text-white", "placeholder:text-white/60"],
                                            inputWrapper: ["text-white"],
                                            errorMessage: ["text-md"]
                                        }}
                                        className="mr-2"
                                    />
                                )}
                            </Field>

                            <Field name="last_name">
                                {({ field }) => (
                                    <Input type="text" name="last_name" label="Last Name" placeholder="Enter your last name"
                                        {...field}
                                        isClearable
                                        variant="flat"
                                        size="md"
                                        isRequired
                                        radius="sm"
                                        color="primary"
                                        errorMessage={errors.last_name && touched.last_name && errors.last_name}
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
                                )}
                            </Field>

                        </fieldset>

                        <Field name="username">
                            {({ field }) => (
                                <Input type="text" name="username" label="User Name" placeholder="Enter your user name"
                                    {...field}
                                    isClearable
                                    variant="flat"
                                    size="md"
                                    isRequired
                                    radius="sm"
                                    color="primary"
                                    errorMessage={errors.username && touched.username && errors.username}
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
                                    className="mt-3 w-[90%]"
                                />
                            )}
                        </Field>

                        <Field name="email">
                            {({ field }) => (
                                <Input type="email" name="email" label="Email" placeholder="Enter your email"
                                    {...field}
                                    isClearable
                                    variant="flat"
                                    size="md"
                                    isRequired
                                    radius="sm"
                                    color="primary"
                                    errorMessage={errors.email && touched.email && errors.email}
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
                                    className="mt-3 w-[90%]"
                                />
                            )}
                        </Field>

                        <Field name="phone_number">
                            {({ field }) => (
                                <Input type="number" name="phone_number" label="Phone Number" placeholder="+92 123456789"
                                    {...field}
                                    isClearable
                                    variant="flat"
                                    size="md"
                                    isRequired
                                    radius="sm"
                                    color="primary"
                                    errorMessage={errors.phone_number && touched.phone_number && errors.phone_number}
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
                                    className="mt-3 w-[90%]"
                                />
                            )}
                        </Field>

                        <Field name="sex">
                            {({ field }) => (
                                <RadioGroup
                                    {...field}
                                    label="Gender?"
                                    name="sex"
                                    orientation="horizontal"
                                    color="primary"
                                    classNames={{ label: "text-white" }}
                                    className="mt-3 w-[90%]"
                                    errorMessage={errors.sex && touched.sex && errors.sex}
                                >
                                    <Radio value="M">Male</Radio>
                                    <Radio value="F">Female</Radio>
                                    <Radio value="O">Other</Radio>
                                </RadioGroup>
                            )}
                        </Field>


                        <fieldset className="flex flex-row items-center justify-around flex-grow w-[90%] mt-3">

                            <Field name="password">
                                {({ field }) => (
                                    <Input
                                        {...field}
                                        label="Password"
                                        name="password"
                                        variant="flat"
                                        size="md"
                                        isRequired
                                        radius="sm"
                                        errorMessage={errors.password && touched.password && errors.password}
                                        //value={password}
                                        //onValueChange={(e) => setPassword(value)}
                                        //onChange={(e) => { setPassword(e.currentTarget.value) }}
                                        placeholder="Enter your password"
                                        //isPasswordInvalid={isPasswordInvalid}
                                        color="primary"
                                        //color={isPasswordInvalid ? "danger" : "primary"}
                                        //errorMessage={isPasswordInvalid && "Your Password doesn't follow the format!"}
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
                                        className="mr-2"
                                    />
                                )}
                            </Field>

                            <Field name="password2">
                                {({ field }) => (
                                    <Input
                                        {...field}
                                        label="Password"
                                        name="password2"
                                        variant="flat"
                                        size="md"
                                        isRequired
                                        radius="sm"
                                        //value={password}
                                        //onValueChange={(e) => setPassword(value)}
                                        //onChange={(e) => { setPassword(e.currentTarget.value) }}
                                        placeholder="Enter your password again"
                                        //isPasswordInvalid={isPasswordInvalid}
                                        color="primary"
                                        //color={isPasswordInvalid ? "danger" : "primary"}
                                        //errorMessage={isPasswordInvalid && "Your Password doesn't follow the format!"}
                                        errorMessage={errors.password2 && touched.password2 && errors.password2}
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
                                        className=""
                                    />
                                )}
                            </Field>

                        </fieldset>
                        <button /* disabled={loginbtndisable ? 'disabled' : undefined} */ type="submit" className=" w-[90%] mt-5  h-10   bg-[#F4A261] hover:border-white hover:border-2 rounded-md sm:text-lg  font-medium flex flex-row items-center justify-center"  >{registerbtndisable ? <Spinner size="md" color="white" /> : <span> Sign up</span>}</button>
                        <button type="button" className="text-white w-[90%] mt-4 h-10 sm:h-12  bg-black hover:border-white hover:border-2 rounded-md  font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center justify-between "><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
                        <div className="w-[90%] mt-4 flex flex-col items-center justify-center">
                            <Divider className=" " />
                            <p className=" mt-2 text-sm sm:text-md text-center">Already have an account? <span className="font-bold"><Link href='/login'>Sign in</Link></span></p>

                        </div>

                    </Form>
                )}
            </Formik>


            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}

            >
                {({ errors, touched }) => (
                    <Form id="mobileversion" className=" dark w-[95%] flex flex-col justify-start items-center sm:hidden   ">


                        <fieldset className="flex flex-row items-center justify-around flex-grow w-[90%]">
                            <Field name="first_name">
                                {({ field }) => (
                                    <Input type="text" label="First Name" placeholder="Enter your first name"
                                        {...field}
                                        isClearable
                                        variant="flat"
                                        size="sm"
                                        isRequired
                                        radius="sm"
                                        color="primary"
                                        errorMessage={errors.first_name && touched.first_name && errors.first_name}
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
                                )}
                            </Field>

                            <Field name="last_name">
                                {({ field }) => (
                                    <Input type="text" label="Last Name" placeholder="Enter your last name"
                                        {...field}
                                        isClearable
                                        variant="flat"
                                        size="sm"
                                        isRequired
                                        radius="sm"
                                        color="primary"
                                        errorMessage={errors.last_name && touched.last_name && errors.last_name}
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
                                )}
                            </Field>

                        </fieldset>

                        <Field name="username">
                            {({ field }) => (
                                <Input type="text" label="User Name" placeholder="Enter your user name"
                                    {...field}
                                    isClearable
                                    variant="flat"
                                    size="sm"
                                    isRequired
                                    radius="sm"
                                    color="primary"
                                    errorMessage={errors.username && touched.username && errors.username}
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
                                    className="mt-3 w-[90%]"
                                />
                            )}
                        </Field>

                        <Field name="email">
                            {({ field }) => (
                                <Input type="email" label="Email" placeholder="Enter your email"
                                    {...field}
                                    isClearable
                                    variant="flat"
                                    size="sm"
                                    isRequired
                                    radius="sm"
                                    color="primary"
                                    errorMessage={errors.email && touched.email && errors.email}
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
                                    className="mt-3 w-[90%]"
                                />
                            )}
                        </Field>

                        <Field name="phone_number">
                            {({ field }) => (
                                <Input type="number" label="Phone Number" placeholder="+92 123456789"
                                    {...field}
                                    isClearable
                                    variant="flat"
                                    size="sm"
                                    isRequired
                                    radius="sm"
                                    color="primary"
                                    errorMessage={errors.phone_number && touched.phone_number && errors.phone_number}
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
                                    className="mt-3 w-[90%]"
                                />
                            )}
                        </Field>

                        <Field name="sex">
                            {({ field }) => (
                                <RadioGroup
                                    {...field}
                                    label="Gender?"
                                    orientation="horizontal"
                                    errorMessage={errors.sex && touched.sex && errors.sex}
                                    color="primary"
                                    classNames={{ label: "text-white" }}
                                    className="mt-3 w-[90%]"
                                >
                                    <Radio value="M">Male</Radio>
                                    <Radio value="F">Female</Radio>
                                    <Radio value="O">Other</Radio>
                                </RadioGroup>
                            )}
                        </Field>

                        <fieldset className="flex flex-row items-center justify-around flex-grow w-[90%] mt-3">
                            <Field name="password">
                                {({ field }) => (
                                    <Input
                                        {...field}
                                        label="Password"
                                        variant="flat"
                                        size="sm"
                                        isRequired
                                        radius="sm"
                                        errorMessage={errors.password && touched.password && errors.password}
                                        //value={password}
                                        //onValueChange={(e) => setPassword(value)}
                                        //onChange={(e) => { setPassword(e.currentTarget.value) }}
                                        placeholder="Enter your password"
                                        //isPasswordInvalid={isPasswordInvalid}
                                        color="primary"
                                        //color={isPasswordInvalid ? "danger" : "primary"}
                                        //errorMessage={isPasswordInvalid && "Your Password doesn't follow the format!"}
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
                                        className="mr-2"
                                    />
                                )}
                            </Field>

                            <Field name="password2">
                                {({ field }) => (
                                    <Input
                                        {...field}
                                        label="Password"
                                        variant="flat"
                                        size="sm"
                                        isRequired
                                        radius="sm"
                                        errorMessage={errors.password2 && touched.password2 && errors.password2}
                                        //value={password}
                                        //onValueChange={(e) => setPassword(value)}
                                        //onChange={(e) => { setPassword(e.currentTarget.value) }}
                                        placeholder="Enter your password again"
                                        //isPasswordInvalid={isPasswordInvalid}
                                        color="primary"
                                        //color={isPasswordInvalid ? "danger" : "primary"}
                                        //errorMessage={isPasswordInvalid && "Your Password doesn't follow the format!"}
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
                                        className=""
                                    />
                                )}
                            </Field>
                        </fieldset>

                        <button /* disabled={loginbtndisable ? 'disabled' : undefined} */ type="submit" className=" w-[90%] mt-5  h-10   bg-[#F4A261] hover:border-white hover:border-2 rounded-md sm:text-lg  font-medium flex flex-row items-center justify-center"  >{registerbtndisable ? <Spinner size="md" color="white" /> : <span> Sign up</span>}</button>
                        <button type="button" className="text-white w-[90%] mt-4 h-10 sm:h-12  bg-black hover:border-white hover:border-2 rounded-md  font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center justify-between "><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
                        <div className="w-[90%] mt-4 flex flex-col items-center justify-center">
                            <Divider className=" " />
                            <p className=" mt-2 text-sm sm:text-md text-center">Already have an account? <span className="font-bold"><Link href='/login'>Sign in</Link></span></p>

                        </div>

                    </Form>
                )}
            </Formik>
        </>
    );
}

export default Register;