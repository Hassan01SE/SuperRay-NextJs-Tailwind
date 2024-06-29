'use client'
//import axios from "axios";
import axios from "../../../utils/axios";
import { useState, useEffect } from "react";
import { useSession, status } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "../../loading";
import { Avatar } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { MdEdit, MdSave } from "react-icons/md";
import UnAuthorizeDiv from "../../components/UI/UnAuthorizedDiv";
import MustLogin from "../../components/UI/MustLogin";
import useAxiosAuth from "../../../utils/hooks/useAxiosAuth";

const Profile = () => {

    const axiosAuth = useAxiosAuth();
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [joinedDate, setJoinedDate] = useState(null);

    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                if (status === 'authenticated') {
                    const accessToken = session.user.access;
                    /* const response = await axios.get(`profile/`, {
                        headers: {
                            Authorization: `JWT ${accessToken}`,
                        },
                    }); */
                    const response = await axiosAuth.get(`profile/`);
                    const dateJoined = new Date(response.data.date_joined);
                    const formattedDate = `${dateJoined.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}`;
                    setJoinedDate(formattedDate);
                    setUserData(response.data); // Assuming response.data contains user information
                    //console.log(userData);
                    setError(null);
                }
            } catch (error) {
                setError(error.response); // Assuming the error message is provided by the server

            }
        };

        fetchProfile();
    }, [status, session]);

    /*  if (!session) {
         router.push('/');
     } */

    if (status === 'loading') {
        return (<Loading />)
    }

    return (
        <div className="mt-20 min-h-screen w-full">
            {/* {status === 'loading' && <Loading />} */}
            {status === 'authenticated' && userData && (
                <div className=" flex flex-col items-center justify-start w-full h-full">
                    {/* <h1>User Profile</h1>
                    <p>User name: {userData.username} </p>
                    <p>Name: {userData.first_name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Contact Number: {userData.phone_number}</p> */}


                    <div className="mt-5 shadow-lg dark:bg-white bg-[#010000] rounded-lg w-3/4 h-unit-8xl p-4 flex flex-col">
                        <div className="flex flex-row items-center">
                            <Avatar isBordered src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaj0ucKVpTNbey2YUj2f0V_MDQ1G6jBiwt2w&usqp=CAU" className=" w-12 h-12 sm:w-24 sm:h-24  text-large" />
                            <div className="flex flex-col">
                                <h1 className="ml-4 text-2xl sm:text-4xl text-white dark:text-black">{userData.first_name} {userData.last_name} </h1>
                                <p className="ml-4 text-slate-400 dark:text-gray-700  ">@{userData.username}</p>
                            </div>

                        </div>

                        <Divider className="my-4 w-[95%] self-center dark:bg-slate-300 bg-white mt-10" />

                        <div className=" mt-1 flex flex-col  w-full px-2">

                            <h1 className="text-2xl font-semibold md:text-4xl self-center text-white dark:text-black">Your Details</h1>
                            <p className="text-md mt-4 text-slate-300 dark:text-slate-600 "> <span className="font-bold"> Account created on:</span> {joinedDate} </p>
                            <p className="text-md mt-4 text-slate-300 dark:text-slate-600 "> <span className="font-bold"> User Name:</span> {userData.username} </p>
                            <p className="text-md mt-2 text-slate-300 dark:text-slate-600 "> <span className="font-bold"> Email Address:</span> {userData.email} </p>
                            <p className="text-md mt-2 text-slate-300 dark:text-slate-600 "> <span className="font-bold"> Phone Number:</span> {userData.phone_number} </p>
                            <p className="text-md mt-2 text-slate-300 dark:text-slate-600 "> <span className="font-bold"> Gender:</span> {userData.sex === 'M' && "Male"} </p>

                            <p className="text-md mt-2 text-slate-300 dark:text-slate-600 "> <span className="font-bold"> Total reports generated:</span> <Link href='/reports' className="underline font-semibold" > {userData.reports.length}</Link> </p>
                        </div>

                    </div>



                </div>
            )}
            {status === 'authenticated' && !userData && !error && <p>Loading user data...</p>}
            {status === 'unauthenticated' && <MustLogin />}
            {error && <UnAuthorizeDiv error={error} />}
        </div>
    );
}

export default Profile;