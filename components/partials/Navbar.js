'use client'
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Logo from '../../public/logo.png'
import avatoricon from '../../public/profileicon.png'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";



export const Navbar = () => {

    const [nav, setNav] = useState(false);

    // Function to hide nav on resize
    const handleResize = () => {
        if (window.innerWidth >= 1200) { // Assuming 768px is your md breakpoint
            setNav(false);
        }
    };

    // Set up event listener for window resize
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const links = [
        {
            id: 1,
            name: "Home",
            link: "/",
        },
        {
            id: 2,
            name: "Fracture Detection",
            link: "upload"
        },
        {
            id: 3,
            name: "Generate X-Ray Report",
            link: "upload"
        },
        {
            id: 4,
            name: "Past Reports",
            link: 'reports'
        },
        {
            id: 5,
            name: "About",
            link: 'about'
        },
        /* {
            id: 5,
            name: "Sign in",
            link: '/login'
        }, */
    ];

    const profileLinks = [
        {
            id: 1,
            name: "Profile",
            link: "profile",
        },
        {
            id: 2,
            name: "Sign Out",
            link: "logout"
        },


    ];

    const UnauthenticatedProfileLinks = [

        {
            id: 1,
            name: "Sign In",
            link: "login"
        },


    ];

    const mobileAuthenticatedLinks = [
        {
            id: 1,
            name: "Home",
            link: "/",
        },
        {
            id: 2,
            name: "Fracture Detection",
            link: "upload"
        },
        {
            id: 3,
            name: "Generate X-Ray Report",
            link: "upload"
        },
        {
            id: 4,
            name: "Past Reports",
            link: 'reports'
        },
        {
            id: 5,
            name: "About",
            link: 'about'
        },
        {
            id: 6,
            name: "Profile",
            link: 'profile'
        },
        {
            id: 7,
            name: "Sign Out",
            link: 'logout'
        },
    ];

    const mobileLinks = [
        {
            id: 1,
            name: "Home",
            link: "/",
        },
        {
            id: 2,
            name: "Fracture Detection",
            link: "upload"
        },
        {
            id: 3,
            name: "Generate X-Ray Report",
            link: "upload"
        },
        {
            id: 4,
            name: "Past Reports",
            link: 'reports'
        },
        {
            id: 5,
            name: "About",
            link: 'about'
        },

        {
            id: 6,
            name: "Sign In",
            link: 'login'
        },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 sm:px-4 text-white bg-[#0C56BC] fixed nav">
            <div style={{ minWidth: '300px' }}>
                {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
                <h1 className="text-5xl font-signature sm:ml-1 mt-3">
                    <a
                        className=""
                        href="/"

                        rel="noreferrer"
                    >
                        <Image className="logo" src={Logo} width={375} />
                    </a>
                </h1>
            </div>

            <ul className="hidden min-[1200px]:flex">

                {links.map(({ id, name, link }) => (
                    <li
                        key={id}
                        className="nav-links px-4 py-4 text-center cursor-pointer capitalize text-lg font-medium text-white hover:opacity-80  hover:scale-105  hover:underline hover:decoration-solid duration-75  link-underline"
                    >
                        <Link href={link}>{name}</Link>
                    </li>
                ))}

            </ul>

            <div id="profile" className="min-[1200px]:mr-4 min-[1200px]:flex hidden">


                <Dropdown placement="bottom-start">
                    <DropdownTrigger>
                        <User
                            as="button"
                            avatarProps={{
                                isBordered: true,
                                src: "https://avatars.githubusercontent.com/u/64270021?v=4",
                                color: 'primary',
                                showFallback: 'https://images.unsplash.com/broken',
                            }}
                            className="transition-transform"
                            description={(
                                <h2 className="text-slate-200">@chullo</h2>
                            )}
                            name="Dr. Chul"

                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="User Actions" variant="bordered">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-bold text-white">Signed in as</p>
                            <p className="font-bold text-white">@chullo</p>
                        </DropdownItem>
                        <DropdownItem key="settings">
                            My Profile
                        </DropdownItem>
                        {/*  <DropdownItem key="team_settings">Team Settings</DropdownItem>
                        <DropdownItem key="analytics">
                            Analytics
                        </DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">Configurations</DropdownItem>
                        <DropdownItem key="help_and_feedback">
                            Help & Feedback
                        </DropdownItem> */}

                        <DropdownItem key="logout" color="danger">
                            Sign Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>



                {/* <ul className="hidden min-[1200px]:flex">

                    {profileLinks.map(({ id, name, link }) => (
                        <li
                            key={id}
                            className="nav-links px-4 py-4 cursor-pointer capitalize text-lg font-medium text-white hover:opacity-80  hover:scale-105  hover:underline hover:decoration-solid duration-75  link-underline"
                        >
                            <Link href={link}>{name}</Link>
                        </li>
                    ))}

                </ul> */}
            </div>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-white min-[1200px]:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center text-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-800 to-blue-500 text-white">
                    {mobileAuthenticatedLinks.map(({ id, name, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-4 text-3xl hover:underline hover:opacity-80" //it was text-4xl before and py 6
                        >
                            <Link onClick={() => setNav(!nav)} href={link}>
                                {name}
                            </Link>
                        </li>
                    ))}

                </ul>
            )}
        </div>
    );
}
