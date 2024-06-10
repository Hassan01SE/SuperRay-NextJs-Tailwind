import logo from "../../public/srblue.png"
import Image from 'next/image';

const XrayPDF = ({ report, createdDate, createdTime }) => {


    return (
        <div className=" w-[350px] h-full  md:h-[600px] pb-6 max-h-full sm:w-[700px] lg:w-[800px] bg-white flex flex-col items-center rounded-md shadow-sm">


            <Image src={logo} alt="srlogo" className=" w-32 md:w-64 self-start" />


            <main className="mt-2 p-2 md:p-0 flex flex-col items-center md:flex-row md:items-start w-full justify-around">

                <div className="flex flex-col md:w-[40%]">
                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${report.image}`} className=" w-[200px] md:w-[350px]" alt="report img" />
                    <h1 className="capitalize text-start text-sm md:text-xl font-medium text-slate-800">Upscaled Xray image</h1>
                </div>

                <div className="md:w-1/2">
                    <h2 className=" text-center mt-2 md:mt-0  md:text-start font-medium text-lg md:text-3xl text-black ">Diagnose by SuperRay</h2>
                    <p className=" text-sm md:text-lg mt-4 text-black"><span className="text-sm md:text-lg font-bold">Findings: </span> {report.diagnose}</p>

                </div>
            </main>
            <p className="text-xs mt-2 md:text-sm mr-2 self-end bottom-0  text-slate-600"><span className="md:text-sm text-slate-500">Report created on: </span> {createdTime}, {createdDate}</p>
        </div>
    );
}

export default XrayPDF;