'use client'
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaFileMedical, FaXRay, FaUser, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { RiFileHistoryFill } from "react-icons/ri";
import Image from "next/image";
import Logo from '../../../public/logo.png'
import avatoricon from '../../../public/profileicon.png'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";
import { signIn, signOut, useSession, status } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@nextui-org/react";
import HomeIcon from '../icons/HomeIcon';
import ThemeContext from "../../contexts/ThemeContext";


export const Navbar = () => {

    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    const router = useRouter();
    const { data: session, status } = useSession();

    const [username, setUser] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();


    const [nav, setNav] = useState(false);
    const [islogged, setlogin] = useState();

    const [isDarkMode, setIsDarkMode] = useState(isDarkTheme);

    useEffect(() => {
        if (session) {
            let token = session.user.access;
            console.log(token);
            const { username, first_name, email } = jwtDecode(token);
            setName(first_name);
            setUser(username);
            setEmail(email);
            setlogin(true);
        }
        else {
            setlogin(false);
        }
    }, [session])

    useEffect(() => {
        setIsDarkMode(isDarkTheme);
    }, [isDarkTheme]);

    const handleSwitchToggle = () => {
        toggleTheme();
        console.log(isDarkTheme);
    };

    // Function to handle switch toggle
    /* const handleSwitchToggle = () => {
        toggleTheme(isDarkMode);
    }; */

    // Effect to update HTML class name based on dark mode state
    /* useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }

    }, [isDarkMode]);
 */
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
            link: "/detect"
        },
        {
            id: 3,
            name: "Generate X-Ray Report",
            link: "/upload"
        },
        /* {
            id: 4,
            name: "Past Reports",
            link: 'reports'
        }, */
        {
            id: 4,
            name: "About",
            link: '/about'
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
            link: "/profile",
        },
        {
            id: 2,
            name: "Sign Out",
            link: "/logout"
        },


    ];

    const unloggedLink = [
        {
            id: 1,
            name: "Sign In",
            link: "/login"
        },
        /*  {
             id: 2,
             name: "Sign Up",
             link: "register"
         }, */
    ]

    const UnauthenticatedProfileLinks = [

        {
            id: 1,
            name: "Sign In",
            link: "/login"
        },


    ];

    const mobileAuthenticatedLinks = [
        {
            id: 1,
            name: <div className="flex flex-row"> <FaHome className="mr-2" /> <span>Home</span> </div>,
            link: "/",
        },
        {
            id: 2,
            name: <div className="flex flex-row"> <FaXRay className="mr-2 mt-1" /> <span>Fracture Detection</span> </div>,
            link: "/detect"
        },
        {
            id: 3,
            name: <div className="flex flex-row"> <FaFileMedical className="mr-2 mt-1" /> <span>Generate X-Ray Report</span> </div>,
            link: "/upload"
        },
        {
            id: 4,
            name: <div className="flex flex-row"> <RiFileHistoryFill className="mr-2 mt-1" /> <span>Past Reports</span> </div>,
            link: '/reports'
        },
        {
            id: 5,
            name: <div className="flex flex-row"> <FaInfoCircle className="mr-2 mt-1" /> <span>About</span> </div>,
            link: '/about'
        },
        {
            id: 6,
            name: <div className="flex flex-row"> <FaUser className="mr-2 mt-1" /> <span>Profile</span> </div>,
            link: '/profile'
        },
        {
            id: 7,
            name: <div className="flex flex-row"> <FaSignOutAlt className="mr-2 mt-1" /> <span>Sign Out</span> </div>,
            link: '/',
        },
    ];

    const mobileLinks = [
        {
            id: 1,
            name: <div className="flex flex-row"> <FaHome className="mr-2" /> <span>Home</span> </div>,
            link: "/",
        },
        {
            id: 2,
            name: <div className="flex flex-row"> <FaXRay className="mr-2 mt-1" /> <span>Fracture Detection</span> </div>,
            link: "/detect"
        },
        {
            id: 3,
            name: <div className="flex flex-row"> <FaFileMedical className="mr-2 mt-1" /> <span>Generate X-Ray Report</span> </div>,
            link: "/upload"
        },
        /* {
            id: 4,
            name: "Past Reports",
            link: 'reports'
        }, */
        {
            id: 5,
            name: <div className="flex flex-row"> <FaInfoCircle className="mr-2 mt-1" /> <span>About</span> </div>,
            link: '/about'
        },

        {
            id: 6,
            name: <div className="flex flex-row"> <FaSignInAlt className="mr-2 mt-1" /> <span>Sign In</span> </div>,
            link: '/login'
        },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 z-50 sm:px-4 text-white dark:bg-[#0C56BC] bg-[#040D12] fixed nav shadow-md">
            <div className="" style={{ minWidth: '300px' }}>
                {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
                <h1 className="text-5xl font-signature sm:ml-1 mt-3">
                    <Link
                        className=""
                        href="/"

                        rel="noreferrer"
                    >
                        <Image className="logo" src={Logo} width={375} />
                    </Link>
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


            <div id="profile" className=" min-[1200px]:flex hidden dark">

                {islogged &&
                    <Dropdown placement="bottom-start" className="dark">
                        <DropdownTrigger>
                            <User
                                as="button"
                                avatarProps={{
                                    isBordered: true,
                                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaj0ucKVpTNbey2YUj2f0V_MDQ1G6jBiwt2w&usqp=CAU",
                                    color: 'primary',
                                    showFallback: 'https://images.unsplash.com/broken',
                                }}
                                className="transition-transform"
                                description={(
                                    <h2 className="text-slate-200">@{username}</h2>
                                )}
                                name={name}

                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="User Actions" variant="bordered">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-bold text-white">Signed in as</p>
                                <p className="font-bold text-white">{email}</p>
                            </DropdownItem>
                            <DropdownItem key="my_profile" >
                                <Link href="/profile">My Profile</Link>
                            </DropdownItem>
                            <DropdownItem key="past_reports" > <Link href="/reports">Past Reports</Link></DropdownItem>
                            {/*
                        <DropdownItem key="analytics">
                            Analytics
                        </DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">Configurations</DropdownItem>
                        <DropdownItem key="help_and_feedback">
                            Help & Feedback
                        </DropdownItem> */}

                            <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
                                Sign Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>}

                {!islogged && status == 'unauthenticated' &&
                    <ul className="hidden min-[1200px]:flex animate-appear">

                        {unloggedLink.map(({ id, name, link }) => (
                            <li
                                key={id}
                                className="nav-links px-4 py-4 cursor-pointer capitalize text-lg font-medium text-white hover:opacity-80  hover:scale-105  hover:underline hover:decoration-solid duration-75  link-underline"
                            >
                                <Link href={link}>{name}</Link>
                            </li>
                        ))}
                        {/* <button onClick={() => signIn()}>Sign in</button> */}
                    </ul>}

                {status == 'loading' &&
                    <div className="max-w-[300px] w-full flex items-center gap-3 ">
                        <div>
                            <Skeleton className="flex rounded-full w-12 h-12" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <Skeleton className="h-3 w-3/5 rounded-lg" />
                            <Skeleton className="h-3 w-4/5 rounded-lg" />
                        </div>
                    </div>
                }

            </div>

            <Switch
                className="hidden min-[1200px]:flex dark"
                isSelected={isDarkTheme}
                size="lg"
                color="primary"
                startContent={<MoonIcon />}
                endContent={<SunIcon />}
                onChange={handleSwitchToggle}
            >

            </Switch>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-white min-[1200px]:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center text-center absolute top-0 left-0 w-full h-screen bg-black dark:bg-gradient-to-b dark:from-blue-800 dark:to-blue-500 text-white">
                    {islogged && mobileAuthenticatedLinks.map(({ id, name, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-4 text-3xl hover:underline hover:opacity-80" //it was text-4xl before and py 6
                        >
                            <Link className="flex flex-row" onClick={() => { setNav(!nav); id === 7 && signOut() }} href={link} >
                                {name}
                            </Link>
                        </li>
                    ))}

                    {!islogged && mobileLinks.map(({ id, name, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-4 text-3xl hover:underline hover:opacity-80" //it was text-4xl before and py 6
                        >
                            <Link onClick={() => setNav(!nav)} href={link}>
                                {name}
                            </Link>
                        </li>
                    ))}

                    <li className=" mt-10 mr-2 self-end">
                        <Switch
                            className=" min-[1200px]:flex dark"
                            isSelected={isDarkTheme}
                            size="md"
                            color="primary"
                            startContent={<MoonIcon />}
                            endContent={<SunIcon />}
                            onChange={handleSwitchToggle}
                        >
                            {/* Dark mode {isDarkMode ? "off" : "on"} */}
                        </Switch>
                    </li>

                </ul>
            )}
        </div>
    );
}
