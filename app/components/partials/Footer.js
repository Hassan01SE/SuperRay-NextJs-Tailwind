import React from 'react'
import Logo from '../../../public/logo.png'
import Image from 'next/image'
import Link from "next/link";

export const Footer = () => {
    return (


        <footer className="  shadow w-full dark:bg-[#00308F] bg-[#040D12] border-t-2 border-t-white">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src={Logo} className="w-64" alt="SuperRay Logo" />
                        {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SuperRay</span> */}
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
                        <li>
                            <Link href="/about" className="hover:underline me-4 md:me-6">About</Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/licensing" className="hover:underline me-4 md:me-6">Licensing</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm flex-col  sm:text-center dark:text-gray-400 text-white">© 2024 <Link href="/" className="hover:underline">SuperRay™</Link> <span className='ml-2'> All Rights Reserved.</span></span>
            </div>
        </footer>
    )

    {/* <footer className='w-full bg-[#00308F] h-20 p-2 ' >

            <h4 className="text-white text-center ">Super Ray</h4>
        </footer > */}

}
