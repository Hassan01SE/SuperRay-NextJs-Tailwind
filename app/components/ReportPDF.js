import logo from "../../public/srblue.png"
import Image from 'next/image';


const ReportPDF = ({ report, createdDate, createdTime }) => {


    return (
        <>
            <div className=" flex  w-[350px] h-full  md:h-[11.7in] pb-6 max-h-full sm:w-[700px] lg:w-[850px] bg-white  flex-col items-center rounded-md shadow-sm">


                <Image src={logo} alt="srlogo" className=" w-32 md:w-64 lg:w-72 self-start" />


                <main className="mt-4 p-2 md:p-0 flex flex-col items-center  w-full justify-around">

                    <div className="flex flex-col ">
                        <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${report.image}`} className=" w-[200px] max-h-[250px] md:w-[350px] max-w-[370px] md:max-h-[400px] lg:w-[450px] lg:h-[450px]" alt="report img" />
                        <h1 className="capitalize text-center text-sm md:text-xl font-medium text-slate-800">Upscaled {report.domain} image</h1>
                    </div>

                    <div className="md:w-full px-4 mt-4">
                        <h2 className=" text-center mt-2  font-medium text-lg md:text-3xl text-blue-800 ">Diagnoses by SuperRay</h2>
                        <p className=" text-sm md:text-lg mt-4 text-black"><span className="text-sm md:text-lg font-bold">Findings: </span> {report.diagnose}</p>

                    </div>
                </main>
                <p className="text-xs mt-10 md:text-sm mr-2 self-end bottom-0  text-slate-600"><span className="md:text-sm text-slate-500">Report created on: </span> {createdTime}, {createdDate}</p>


                <footer className=" hidden md:flex mt-auto text-center p-4">

                    <p className="text-sm text-black font-medium">Disclaimer: <span className="text-slate-600 text-xs">
                        The AI diagnostics provided by our Service are intended for research and educational purposes only and should not be solely relied upon for clinical decision-making. They are designed to assist healthcare professionals, such as radiologists, by providing supplementary information. The Company does not warrant that the AI diagnostic results are accurate, complete, or free from error, and they should be used in conjunction with professional medical advice. Always seek the guidance of qualified healthcare providers with any questions you may have regarding a medical condition or diagnosis.</span></p>

                </footer>
            </div>


        </>


    );
}

export default ReportPDF;