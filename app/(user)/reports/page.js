'use client'
import { Image } from "@nextui-org/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSession, status } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "../../loading";
import { Card, Skeleton, Button } from "@nextui-org/react";
import UnAuthorizeDiv from "../../components/UI/UnAuthorizedDiv";
import MustLogin from "../../components/UI/MustLogin";
import useAxiosAuth from "../../../utils/hooks/useAxiosAuth";


const Report = () => {
    const axiosAuth = useAxiosAuth();
    const router = useRouter();
    const { data: session, status } = useSession();
    const [reports, setReports] = useState([]);
    const [loadText, setLoadText] = useState('Loading ..');
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const reportsPerPage = 5;

    useEffect(() => {
        const fetchReports = async () => {
            try {
                if (status === 'authenticated') {
                    const accessToken = session.user.access;
                    /* const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}reports`, {
                        headers: {
                            Authorization: `JWT ${accessToken}`,
                        },
                    }); */
                    const response = await axiosAuth.get(`reports`)
                    setReports(response.data);
                }
            } catch (error) {

                setError(error.response);


            }
        };

        fetchReports();
    }, [status, session]);

    const handleReportView = (id) => {
        router.push(`/reports/${id}`);
    }

    const indexOfLastReport = currentPage * reportsPerPage;
    const indexOfFirstReport = indexOfLastReport - reportsPerPage;
    const currentReports = reports.slice(indexOfFirstReport, indexOfLastReport);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    setTimeout(() => {
        if (status === 'authenticated' && !error && reports.length === 0) {
            setLoadText('No Reports Found!')
        }
    }, 10000)

    if (status === 'loading') {
        return <Loading />
    }

    return (
        <div className="mt-20 pb-2 w-full flex flex-col min-h-screen">
            {/* {status === 'loading' && <Loading />} */}

            {/* {error && <p className="p4">Error: {error.statusText}</p>} */}

            {error && <UnAuthorizeDiv error={error} />}

            {status === 'authenticated' && currentReports.length > 0 && (
                <div className="flex flex-col max-h-full">
                    <h1 className="mt-4 font-semibold text-center capitalize text-4xl md:text-6xl">Your past reports</h1>

                    <div className="flex justify-end px-4 py-2">
                        {Array.from({ length: Math.ceil(reports.length / reportsPerPage) }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => paginate(index + 1)}
                                className={`transition duration-300 ease-in-out mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? ' bg-gray-700 dark:bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>

                    <div className="mt-8 pb-6 px-4 flex flex-col max-h-full">
                        {currentReports.map((report) => (
                            <div key={report.id} className="mt-4 flex flex-row justify-between items-center bg-gray-800 dark:bg-white max-w-xl rounded-xl border dark:border-gray-700 border-gray-200 px-6 py-4 shadow-lg transition duration-300 ease-in-out transform hover:shadow-2xl">
                                <div className="relative overflow-hidden rounded-lg w-1/4">
                                    <Image removeWrapper isBlurred src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${report.image}`} alt="report img" className="mb-2 w-full h-32 rounded-lg hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out" />
                                </div>
                                <div className="w-[60%] ml-4">
                                    <h2 className="mb-2 text-xl font-semibold tracking-tight dark:text-gray-900 text-white">Medical Report #{report.id}</h2>
                                    <div className="flex flex-col items-start">
                                        <p className="mb-3 dark:text-gray-600 text-gray-300">{report.domain}</p>
                                        <button onClick={() => handleReportView(report.id)} className="font-medium bg-gradient-to-r from-[#F4A261] to-[#E76F51] hover:from-[#E76F51] hover:to-[#F4A261] text-white rounded-lg w-1/2 h-10 sm:w-3/5 sm:h-10 md:text-lg focus:outline-none transition duration-300 ease-in-out">View</button>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            )}

            {status === 'authenticated' && !error && reports.length === 0 && (
                <div className="h-screen flex flex-col w-full">
                    <h1 className="mt-4 font-semibold text-center capitalize text-4xl md:text-6xl">Your past reports</h1>
                    <div className="mt-4 px-2">{loadText}</div>

                </div>
            )}

            {status === 'unauthenticated' && (
                <MustLogin />
            )}



        </div>
    );
}

export default Report;
