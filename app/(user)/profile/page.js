'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import { useSession, status } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "../../loading";

const Profile = () => {

    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                if (status === 'authenticated') {
                    const accessToken = session.user.access;
                    const response = await axios.get('http://127.0.0.1:8000/api/profile/', {
                        headers: {
                            Authorization: `JWT ${accessToken}`,
                        },
                    });
                    setUserData(response.data); // Assuming response.data contains user information
                }
            } catch (error) {
                setError(error.response.data.message); // Assuming the error message is provided by the server
            }
        };

        fetchProfile();
    }, [status, session]);

    /*  if (!session) {
         router.push('/');
     } */


    return (
        <div className="mt-20 min-h-screen w-full">
            {status === 'loading' && <Loading />}
            {status === 'authenticated' && userData && (
                <div>
                    <h1>User Profile</h1>
                    <p>User name: {userData.username} </p>
                    <p>Name: {userData.first_name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Contact Number: {userData.phone_number}</p>
                    {/* Render other user information as needed */}
                </div>
            )}
            {status === 'authenticated' && !userData && !error && <p>Loading user data...</p>}
            {status === 'unauthenticated' && <p>Please sign in to view your profile.</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
}

export default Profile;