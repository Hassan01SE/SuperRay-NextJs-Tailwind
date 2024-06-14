'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import { useSession, status } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "../../loading";
import { Card, Skeleton, Button } from "@nextui-org/react";

const Report = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [reports, setReports] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const reportsPerPage = 5;

    useEffect(() => {
        const fetchReports = async () => {
            try {
                if (status === 'authenticated') {
                    const accessToken = session.user.access;
                    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}reports`, {
                        headers: {
                            Authorization: `JWT ${accessToken}`,
                        },
                    });
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

    return (
        <div className="mt-20 pb-2 w-full flex flex-col min-h-screen">
            {status === 'loading' && <Loading />}

            {status === 'authenticated' && currentReports.length > 0 && (
                <div className="flex flex-col max-h-full">
                    <h1 className="mt-4 font-semibold text-center capitalize text-4xl md:text-6xl">Your past reports</h1>

                    <div className="flex justify-end px-4 py-2">
                        {Array.from({ length: Math.ceil(reports.length / reportsPerPage) }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => paginate(index + 1)}
                                className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>

                    <div className="mt-8 pb-6 px-4 flex flex-col max-h-full">
                        {currentReports.map((report) => (
                            <div key={report.id} className="mt-4 flex flex-row justify-between items-center dark:bg-white bg-black max-w-xl rounded-lg border dark:border-gray-200 border-slate-600 px-5 py-2 shadow-md">
                                <div className="relative overflow-hidden rounded-md w-1/4">
                                    <img src={`http://127.0.0.1:8000${report.image}`} alt="report img" className="mb-2 w-full h-32 rounded-md hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out" />
                                </div>
                                <div className="w-[60%]">
                                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-gray-900">Xray Report #{report.id}</h2>
                                    <div className="flex flex-col items-start">
                                        <p className="mb-3 text-slate-300 dark:text-gray-700">{report.diagnose}</p>
                                        <button onClick={() => handleReportView(report.id)} className="font-semibold bg-gradient-to-r from-[#F4A261] to-[#E76F51] hover:from-[#E76F51] hover:to-[#F4A261] hover:dark:border-slate-500 hover:border-white hover:border-2 rounded-md w-1/2 h-10 sm:w-3/5 sm:h-10 md:text-lg focus:outline-none">View</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {status === 'authenticated' && reports.length === 0 && (
                <div className="h-screen flex flex-col w-full">
                    <h1 className="mt-4 font-semibold text-center capitalize text-4xl md:text-6xl">Your past reports</h1>
                    <div className="mt-4 px-2">No Reports Found</div>
                </div>
            )}

            {status === 'unauthenticated' && (
                <div className="h-screen">
                    <p>Please sign in to view your past reports.</p>
                </div>
            )}
        </div>
    );
}

export default Report;
