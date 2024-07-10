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
import { Tooltip } from "@nextui-org/tooltip";
import { MdErrorOutline, MdClose } from "react-icons/md";

const Profile = () => {

    const axiosAuth = useAxiosAuth();
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [joinedDate, setJoinedDate] = useState(null);

    const router = useRouter();
    const { data: session, status } = useSession();

    const [updateBtnMsg, setUpdateBtnMsg] = useState('Update');
    const [isUpdateError, setIsUpdateError] = useState(false);
    const [updateErrorMsg, setUpdateErrorMsg] = useState();
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({
        first_name: "",
        last_name: "",
        sex: "",
        phone_number: ""
    });

    const handleEditClick = () => {
        setEditedData({
            first_name: userData.first_name,
            last_name: userData.last_name,
            sex: userData.sex,
            phone_number: userData.phone_number
        });
        setIsEditing(!isEditing);
        /* if (isEditing) {
            setEditedData({
                first_name: userData.first_name,
                last_name: userData.last_name,
                sex: userData.sex,
                phone_number: userData.phone_number
            });
        } */
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };

    const cancelUpdate = () => {
        setIsEditing(false);
    }

    const handleUpdateClick = async () => {

        if (!editedData.first_name || !editedData.last_name) {
            setUpdateErrorMsg("First Name and Last Name must not be empty!");
            setIsUpdateError(true);
            return;
        }

        setUpdateBtnMsg('Updating ..')

        const validatedData = {
            ...editedData,
            phone_number: String(editedData.phone_number)
        };

        try {
            await axiosAuth.put(`profile/update/`, validatedData);
            setUserData({ ...userData, ...validatedData });
            setIsEditing(false);
        } catch (error) {
            setUpdateErrorMsg("Something went wrong! Try again later!");
            setIsUpdateError(true);
        }
        finally {
            setUpdateBtnMsg('Update');
        }
    };

    const gender = (sex) => {
        if (sex === "M") {
            return "Male";
        }
        else if (sex === "F") {
            return "Female";
        }
        else if (sex === "O") {
            return "Other";
        }
        else { return null; }
    }

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


    const ErrorAlert = () => {
        return (
            <div className="mt-2 mb-2 p-2 w-full max-w-md mx-auto">
                <div className="flex items-center justify-between bg-red-500 text-white text-sm font-bold px-4 py-3 rounded-md" role="alert">
                    <div className="flex items-center">
                        <MdErrorOutline className="mr-2 text-xl" />
                        <span>{updateErrorMsg}</span>
                    </div>
                    <button onClick={() => { setIsUpdateError(false) }} className="focus:outline-none">
                        <MdClose className="text-xl" />
                    </button>
                </div>
            </div>
        );
    }


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

                    {isUpdateError && <ErrorAlert />}

                    <div className="mt-5 mb-6 shadow-lg dark:bg-white bg-[#010000] rounded-lg w-3/4 min-h-unit-8xl p-4 flex flex-col">
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

                            {/* <Tooltip color={'warning'} showArrow={true} content={<div className="text-small  text-white">Update Profile</div>}>
                                <MdEdit className=" self-end text-white cursor-pointer dark:text-black" />
                            </Tooltip> */}
                            <div className="self-end">
                                <Tooltip color={'primary'} showArrow={true} content={<div className="text-small self-end  text-white">Update Profile</div>}>
                                    <button onClick={handleEditClick}>
                                        <MdEdit className="  text-white cursor-pointer dark:text-black" />
                                    </button>
                                </Tooltip>
                            </div>

                            {isEditing ?

                                <>
                                    <h1 className="text-lg self-start font-semibold md:text-2xl  text-white dark:text-black">Update Profile</h1>

                                    <label for="first_name" class="mt-4 block mb-2 text-sm md:text-lg font-medium dark:text-slate-700 text-white">First name</label>
                                    <input
                                        name="first_name"
                                        value={editedData.first_name}
                                        onChange={handleInputChange} id="first_name"
                                        className=" w-1/2 dark:bg-gray-50 border dark:border-gray-300 text-slate-200 text-sm md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-slate-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text"
                                    />
                                    <label for="last_name" class="mt-2 block mb-2 text-sm md:text-lg font-medium dark:text-slate-700 text-white">Last name</label>
                                    <input
                                        name="last_name"
                                        value={editedData.last_name}
                                        onChange={handleInputChange} id="last_name"
                                        className=" w-1/2 dark:bg-gray-50 border dark:border-gray-300 text-slate-200 text-sm md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-slate-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text"
                                    />

                                    <label for="phone_number" class="mt-2 block mb-2 text-sm md:text-lg font-medium dark:text-slate-700 text-white">Phone Number</label>
                                    <input
                                        name="phone_number"
                                        value={editedData.phone_number}
                                        onChange={handleInputChange} id="phone_number"
                                        className=" w-1/2 dark:bg-gray-50 border dark:border-gray-300 text-slate-200 text-sm md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-slate-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" type="number"
                                    />

                                    <label for="sex" class="block mb-2 mt-2 text-sm md:text-lg font-medium dark:text-slate-700 text-slate-200">Select your gender</label>
                                    <select name="sex" value={editedData.sex} onChange={handleInputChange} id="sex" class="w-1/2 mb-2 dark:bg-gray-50 border dark:border-gray-300 dark:text-slate-700 text-sm md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-slate-200 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected >Choose your gender</option>
                                        <option value="M" >Male</option>
                                        <option value="F">Female</option>
                                        <option value="O">Other</option>

                                    </select>

                                    <div className="mt-2">
                                        <button onClick={handleUpdateClick} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{updateBtnMsg}</button>
                                        <button onClick={cancelUpdate} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Cancel</button>
                                    </div>

                                </>

                                :
                                <>
                                    <p className="text-md mt-4 text-slate-300 dark:text-slate-600 "> <span className="font-bold"> Account created on:</span> {joinedDate} </p>
                                    <p className="text-md mt-4 text-slate-300 dark:text-slate-600 "> <span className="font-bold"> User Name:</span> {userData.username} </p>
                                    <p className="text-md mt-2 text-slate-300 dark:text-slate-600 "> <span className="font-bold"> Email Address:</span> {userData.email} </p>
                                    <p className="text-md mt-2 text-slate-300 dark:text-slate-600 "> <span className="font-bold"> Phone Number:</span> {userData.phone_number || "Not Provided"} </p>
                                    <p className="text-md mt-2 text-slate-300 dark:text-slate-600 "> <span className="font-bold"> Gender:</span> {gender(userData.sex) || "Not Specified"} </p>

                                    <p className="text-md mt-2 text-slate-300 dark:text-slate-600 "> <span className="font-bold"> Total reports generated:</span> <Link href='/reports' className="underline font-semibold" > {userData.reports.length}</Link> </p>
                                </>
                            }
                        </div>

                    </div>



                </div>
            )}
            {status === 'authenticated' && !userData && !error && <p className="mt-4">Loading user data...</p>}
            {status === 'unauthenticated' && <MustLogin />}
            {error && <UnAuthorizeDiv error={error} />}
        </div>
    );
}

export default Profile;