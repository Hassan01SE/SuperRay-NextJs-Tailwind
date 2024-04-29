import Logo from '../public/logo.png'
import Image from "next/image";
import { Spinner } from "@nextui-org/react";

const Loading = () => {
    return (
        <div className="grid place-content-center w-full min-h-screen z-[99]  dark:bg-blue-800 bg-black">
            {/* <h2 className="text-4xl text-white">Loading ..</h2> */}

            <div className="flex flex-col items-center animate-splash">
                <Image className='w-[400px]  md:w-[450px]  lg:w-[550px]' src={Logo} alt="logo" />
                <p className='text-center text-md lg:text-2xl font-semibold text-white uppercase'>AI Precision, Medical Vision ReDefined!</p>
                <Spinner size='lg' className='mt-4' color='warning' />
            </div>

        </div>
    );
}

export default Loading;