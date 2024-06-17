import imgb from "../../../public/401img.png";
import imgb2 from "../../../public/servererror.png";
import Image from "next/image";
import Link from 'next/link';

const UnAuthorizeDiv = ({ error }) => {

    let errorimg;

    if (error.status == 401) {
        errorimg = imgb;
    }
    else {
        errorimg = imgb2;
    }

    return (

        <div className="min-h-screen flex flex-col items-center w-full">

            <Image src={errorimg} className="mt-2 w-[350px] md:w-[450px] lg:[550px]" />

            <div className="mt-1">
                <h1 className="text-center text-xl uppercase font-semibold text-white md:text-4xl">Error {error.status}: {error.statusText}</h1>

            </div>


        </div>
    );
}

export default UnAuthorizeDiv;