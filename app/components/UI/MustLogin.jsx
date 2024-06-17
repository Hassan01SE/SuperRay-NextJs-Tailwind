import mustloginimg from "../../../public/mustloginimg.png";
import Image from "next/image";
import Link from 'next/link';


const MustLogin = () => {


    return (

        <div className="min-h-screen flex flex-col items-center w-full">

            <Image src={mustloginimg} className="mt-2 w-[350px] md:w-[450px] lg:[550px]" />

            <div className="mt-1">
                <h1 className="text-center text-xl capitalize font-semibold text-white md:text-3xl">You must be logged in to view this page!</h1>
                <p className="text-slate-200 text-md text-center mt-1"> <Link href='/login'> <span className="underline"> Click here to login! </span> </Link> </p>
            </div>


        </div>
    );
}

export default MustLogin;