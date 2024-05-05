'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import { useSession, status } from "next-auth/react";
import { useRouter, Link } from "next/navigation";
import Loading from "../../loading";



const Report = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [reports, setReports] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                if (status === 'authenticated') {
                    const accessToken = session.user.access;
                    const response = await axios.get('http://127.0.0.1:8000/api/reports', {
                        headers: {
                            Authorization: `JWT ${accessToken}`,
                        },
                    });
                    setReports(response.data); // Assuming response.data contains user information
                }
            } catch (error) {
                setError(error.response); // Assuming the error message is provided by the server
            }
        };

        fetchReports();
    }, [status, session]);

    const handleReportView = (id) => {
        router.push(`/reports/${id}`);
    }

    return (
        <div className="mt-20  pb-2 w-full flex flex-col ">
            {status === 'loading' && <Loading />}

            {status === 'authenticated' && reports &&
                (<div className="flex flex-col  ">
                    <h1 className="mt-4 font-semibold text-center capitalize text-4xl md:text-6xl">Your past reports</h1>

                    <div className="mt-8 pb-6 px-4 flex flex-col  max-h-full">
                        {reports.map((report) => (
                            /*  <div key={report.id} className="w-64 h-42 bg-slate-600 mt-4 flex flex-col justify-between">
                                 <h1 className="text-5xl capitalize text-center">Report# {report.id}</h1>
                                 <img src={`http://127.0.0.1:8000${report.image}`} className="w-full" alt="report img" />
                                 <p><b>Diagnose</b>: {report.diagnose}</p>
 
 
                             </div> */
                            <div key={report.id} class="mt-4 flex flex-row justify-between items-center dark:bg-white bg-black max-w-xl rounded-lg border dark:border-gray-200 border-slate-600 px-5 py-2 shadow-md">

                                <div class="relative overflow-hidden rounded-md w-1/4 ">
                                    <img src={`http://127.0.0.1:8000${report.image}`} alt="report img" class="mb-2 w-full h-32 rounded-md hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out" />
                                </div>

                                <div className="w-[60%]">
                                    <h2 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-gray-900">Xray Report #{report.id}</h2>
                                    <div class="flex flex-col items-start">
                                        <p class="mb-3 text-slate-300 dark:text-gray-700">{report.diagnose}</p>
                                        <button onClick={() => { handleReportView(report.id) }} class="font-semibold bg-gradient-to-r from-[#F4A261] to-[#E76F51] hover:from-[#E76F51] hover:to-[#F4A261] hover:dark:border-slate-500 hover:border-white hover:border-2 rounded-md w-1/2 h-10  sm:w-3/5 sm:h-10 md:text-lg focus:outline-none">View</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>)}


            {status === 'authenticated' && !reports && !error && <p className="h-screen">Loading Past Records...</p>}
            {status === 'unauthenticated' && <p className="h-screen">Please sign in to view your past reports.</p>}

        </div>
    );
}

export default Report;