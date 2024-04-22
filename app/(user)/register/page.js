import RegisterForm from '../../components/RegisterForm';
import { Divider } from "@nextui-org/react";

const Register = () => {
    return (
        <div className="w-full flex flex-col justify-start items-center min-h-screen   mt-20 p-4 ">

            <div id='desktop' className="hidden xl:flex  md:flex-row min-h-screen xl:h-[700px] xl:max-h-[720px]   w-[95%]  outline-slate-200 outline-1 outline-double  bg-[#070F2B] dark:outline-none  dark:bg-blue-950 mx-auto my-auto rounded-md items-start justify-evenly  ">

                <div className="w-1/2 h-full flex flex-col justify-start mr-2 md:pl-10">
                    <h1 className="text-3xl font-semibold mt-2 lg:text-4xl"> Sign up</h1>
                    <p className="text-md mt-2 lg:text-lg">Your Gateway to Enhanced Medical Imaging!</p>

                    <div className="w-full mt-4">
                        <RegisterForm />
                    </div>
                </div>

                {/*  <div className=" w-3/5 h-full bg-[url('https://media.licdn.com/dms/image/D4E12AQFVKAFtNnNlEg/article-cover_image-shrink_720_1280/0/1689142758028?e=2147483647&v=beta&t=MoznUEKtoYt9xhitLn0-eHSgKylS0Hxbh1xs-jFy81k')] bg-auto lg:bg-cover bg-no-repeat rounded-md"    >


                </div> */}

                <img className="w-1/2 ml-2 h-full rounded-md" src="https://media.licdn.com/dms/image/D4E12AQFVKAFtNnNlEg/article-cover_image-shrink_720_1280/0/1689142758028?e=2147483647&v=beta&t=MoznUEKtoYt9xhitLn0-eHSgKylS0Hxbh1xs-jFy81k" alt="ai radio" />

            </div>


            <div id='tabletversion' className=" hidden mt-12 sm:flex flex-col justify-start items-center w-[90%] h-[750px] outline-slate-200 outline-1 outline-double  bg-[#070F2B] dark:outline-none  dark:bg-blue-950 rounded-md xl:hidden">

                <div className="w-full  flex flex-col justify-start  pl-10">
                    <h1 className="text-3xl font-semibold mt-2 lg:text-5xl"> Sign up</h1>
                    <p className="text-md mt-2 lg:mt-4 lg:text-lg">Your Gateway to Enhanced Medical Imaging!</p>
                </div>
                <div className="w-3/4 mt-6  flex flex-col justify-start items-center">
                    <RegisterForm />
                </div>

            </div>


            <div id='mobileversion' className='flex flex-col justify-start items-center mt-4 w-full h-[700px] outline-slate-200 outline-1 outline-double  bg-[#070F2B] dark:outline-none  dark:bg-blue-950 rounded-md   sm:hidden'>

                <div className='w-full flex flex-col justify-start items-center'>

                    <h1 className='text-3xl mt-2 font-semibold text-center'>Sign up!</h1>
                    <p className='mt-2 text-md mx-1 text-center text-slate-300'>Your Gateway to Enhanced Medical Imaging!</p>

                </div>

                <Divider className="mt-2 w-[90%]" />

                <div className=' w-full mt-6 flex flex-col items-center'>
                    <RegisterForm />
                </div>

            </div>



        </div>
    );
}

export default Register;