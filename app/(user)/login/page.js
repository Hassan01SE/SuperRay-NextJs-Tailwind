import LoginForm from "../../components/LoginForm";


const Login = () => {



    return (
        <div className="w-full sm:mt-20  min-h-screen  flex flex-col items-center justify-center">


            <section className=" w-[90%] h-3/5 py-1  sm:h-3/5  md:h-4/5 rounded-md mx-auto  bg-blue-900 flex flex-col items-center justify-between">


                <h1 className=" py-4 text-4xl max-w-lg font-semibold text-center sm:text-5xl md:5xl lg:text-6xl">Welcome Back</h1>

                <LoginForm />

            </section>



        </div>
    );
}

export default Login;