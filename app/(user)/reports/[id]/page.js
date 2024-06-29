'use client'
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSession, status } from "next-auth/react";
import axios from 'axios';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import Loading from "../../../loading";
import DocumentIcon from "../../../components/icons/DocumentIcon";
import { GrDownload } from "react-icons/gr";
import logo from "../../../../public/srblue.png";
import Image from 'next/image';
import ReportPdf from '../../../components/ReportPDF';
import { usePDF } from 'react-to-pdf';
import ChatIcon from '../../../components/chat/ChatIcon';
import UnAuthorizeDiv from "../../../components/UI/UnAuthorizedDiv";
import MustLogin from "../../../components/UI/MustLogin";
import useAxiosAuth from "../../../../utils/hooks/useAxiosAuth";
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReportDocument from "../../../components/ReportDocument";


const ReportPage = () => {
    const axiosAuth = useAxiosAuth();
    const { data: session, status } = useSession();
    const router = useRouter();
    const { id } = useParams();
    const [report, setReport] = useState(null);
    const [loadText, setLoadText] = useState('Loading ..');
    const [error, setError] = useState(null);
    const [createdDate, setCreatedDate] = useState();
    const [createdTime, setCreatedTime] = useState();

    const { toPDF, targetRef } = usePDF({ filename: `medicalreport.pdf` });

    useEffect(() => {
        const fetchReport = async () => {
            if (id) {
                try {
                    if (status === 'authenticated') {
                        const accessToken = session.user.access;
                        /* const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}reports/${id}`, {
                            headers: {
                                Authorization: `JWT ${accessToken}`,
                            },
                        }); */
                        const response = await axiosAuth.get(`reports/${id}`);
                        const dateCreated = new Date(response.data.date);
                        const formattedDate = `${dateCreated.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}`;
                        const formattedTime = `${dateCreated.toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                        })}`;
                        setCreatedTime(formattedTime);
                        setCreatedDate(formattedDate);
                        setReport(response.data); // Assuming response.data contains user information
                    }
                } catch (error) {
                    setError(error.response); // Assuming the error message is provided by the server
                }
            }
        };
        fetchReport();
    }, [id, status, session]);



    if (status === 'loading') {
        return <Loading />
    }


    setTimeout(() => {
        if (status === 'authenticated' && !error && !report) {
            setLoadText('No Reports Found!')
        }
    }, 10000)



    return (
        <div className="mt-20 pb-4 w-full min-h-screen p-2">

            {error && <UnAuthorizeDiv error={error} />}

            {/* {status === 'loading' && <Loading />} */}

            {status === 'authenticated' && report &&
                <div id="report-detail" className="mt-1 w-full max-h-full">
                    <Breadcrumbs size="lg">
                        <BreadcrumbItem startContent={<DocumentIcon />} classNames={{ item: "text-white", separator: "text-white/40" }} href="/reports">Reports</BreadcrumbItem>
                        <BreadcrumbItem classNames={{ item: "text-white/60" }} >Report ID #{report.id}</BreadcrumbItem>
                    </Breadcrumbs>

                    <div className="w-full mt-2 flex flex-row justify-end">
                        <button onClick={() => toPDF()} className="hidden  mr-1 w-48 md:inline-block rounded bg-danger px-4 py-2  text-sm md:text-lg font-medium  leading-normal text-white shadow-warning-3 transition duration-150 ease-in-out hover:bg-danger-accent-300 hover:shadow-warning-2 focus:bg-danger-accent-300 focus:shadow-danger-2 focus:outline-none focus:ring-0 active:bg-danger-600 active:shadow-warning-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"> <div className="flex justify-between"> <span> Download PDF</span> <GrDownload className="mt-1" /></div> </button>
                        <button className="mr-1 md:hidden w-48 inline-block rounded bg-danger px-4 py-2  text-sm md:text-lg font-medium  leading-normal text-white shadow-warning-3 transition duration-150 ease-in-out hover:bg-danger-accent-300 hover:shadow-warning-2 focus:bg-danger-accent-300 focus:shadow-danger-2 focus:outline-none focus:ring-0 active:bg-danger-600 active:shadow-warning-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"> <div className="flex justify-between"> <PDFDownloadLink document={<ReportDocument report={report} createdTime={createdTime} createdDate={createdDate} />} fileName="medicalreport.pdf" >
                            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
                        </PDFDownloadLink> <GrDownload className="mt-1" /></div> </button>
                    </div>

                    <section id="report-content" className="w-full  flex flex-col items-center mt-4 xl:mt-0">

                        <div ref={targetRef} className="flex min-h-screen  flex-col items-center">
                            <ReportPdf report={report} createdDate={createdDate} createdTime={createdTime} />
                        </div>

                    </section>
                    <ChatIcon report={report} />
                </div>
            }



            {status === 'authenticated' && !report && !error && <p className="h-screen mt-20">{loadText}</p>}
            {status === 'unauthenticated' && <MustLogin />}


        </div>
    );
};

export default ReportPage;

