import LoginForm from "../../components/LoginForm";


const Login = () => {



    return (
        <div className="w-full sm:mt-20  min-h-screen  flex flex-col items-center justify-center md:justify-normal md:mt-40 xl:justify-center xl:mt-12">


            <section className=" w-[90%] h-[70%] max-h-[700px] py-1  sm:h-3/5  md:h-4/5 xl:max-h-[800px] rounded-lg mx-auto outline-slate-200 outline-1 outline-double  bg-[#070F2B] dark:outline-none  dark:bg-blue-900 flex flex-col items-center justify-between">


                <h1 className=" py-4 text-4xl max-w-lg font-semibold text-center sm:text-5xl md:5xl lg:text-6xl">Welcome Back</h1>

                <LoginForm />

            </section>



        </div>
    );
}

export default Login;