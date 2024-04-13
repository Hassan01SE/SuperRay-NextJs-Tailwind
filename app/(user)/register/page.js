import LoginForm from "../../components/LoginForm";

const Register = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center min-h-screen lg:h-[750px]  pt-20">

            <div className="hidden md:flex  md:flex-row h-[95%] lg:h-[600px] w-[95%] bg-blue-950 mx-auto my-auto rounded-md items-start justify-evenly  ">

                <div className="w-1/2 h-full flex flex-col justify-start mr-2 md:pl-10">
                    <h1 className="text-3xl font-semibold mt-2 lg:text-4xl"> Sign up</h1>
                    <p className="text-md mt-2 lg:text-lg">Your Gateway to Enhanced Medical Imaging!</p>

                    <div className="w-full mt-5"></div>

                </div>

                {/*  <div className=" w-3/5 h-full bg-[url('https://media.licdn.com/dms/image/D4E12AQFVKAFtNnNlEg/article-cover_image-shrink_720_1280/0/1689142758028?e=2147483647&v=beta&t=MoznUEKtoYt9xhitLn0-eHSgKylS0Hxbh1xs-jFy81k')] bg-auto lg:bg-cover bg-no-repeat rounded-md"    >


                </div> */}

                <img className="w-1/2 ml-2 h-full rounded-md" src="https://media.licdn.com/dms/image/D4E12AQFVKAFtNnNlEg/article-cover_image-shrink_720_1280/0/1689142758028?e=2147483647&v=beta&t=MoznUEKtoYt9xhitLn0-eHSgKylS0Hxbh1xs-jFy81k" alt="ai radio" />

            </div>



        </div>
    );
}

export default Register;