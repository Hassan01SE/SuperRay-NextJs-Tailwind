'use client'
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSession, status } from "next-auth/react";
import axios from 'axios';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import Loading from "../../../loading";
import DocumentIcon from "../../../components/icons/DocumentIcon"


const ReportPage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const { id } = useParams();
    const [report, setReport] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReport = async () => {
            if (id) {
                try {
                    if (status === 'authenticated') {
                        const accessToken = session.user.access;
                        const response = await axios.get(`http://127.0.0.1:8000/api/reports/${id}`, {
                            headers: {
                                Authorization: `JWT ${accessToken}`,
                            },
                        });
                        setReport(response.data); // Assuming response.data contains user information
                    }
                } catch (error) {
                    setError(error.response); // Assuming the error message is provided by the server
                }
            }
        };
        fetchReport();
    }, [id, status, session]);



    return (
        <div className="mt-20 h-screen w-full p-2">



            {status === 'loading' && <Loading />}

            {status === 'authenticated' && report &&
                <div id="report-detail" className="mt-1 w-full">
                    <Breadcrumbs size="lg">
                        <BreadcrumbItem startContent={<DocumentIcon />} classNames={{ item: "text-white", separator: "text-white/40" }} href="/reports">Reports</BreadcrumbItem>
                        <BreadcrumbItem classNames={{ item: "text-white/60" }} >Report ID #{report.id}</BreadcrumbItem>
                    </Breadcrumbs>

                    <section id="report-content" className="w-full flex flex-col items-center">

                        <h1>Report #{report.id}</h1>
                        <p>Diagnose: {report.diagnose}</p>
                        <img src={`http://127.0.0.1:8000${report.image}`} className="" alt="report img" />

                    </section>
                </div>
            }

            {status === 'authenticated' && !report && !error && <p className="mt-20">Loading Report ..</p>}
            {status === 'unauthenticated' && <p className="mt-20">Please sign in to view your past reports.</p>}

        </div>
    );
};

export default ReportPage;

