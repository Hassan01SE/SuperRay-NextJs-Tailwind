import LoginForm from "@/components/LoginForm";

const Login = () => {
    return (
        <div className="w-full sm:mt-20  min-h-screen  flex flex-col items-center justify-center">


            <section className=" w-[90%] h-3/5 sm:w-3/4 sm:h-4/5 rounded-md mx-auto  bg-blue-900 flex flex-col items-center justify-between">


                <h1 className=" py-4 text-4xl max-w-lg font-semibold text-center sm:text-6xl">Welcome Back</h1>

                <LoginForm />

            </section>



        </div>
    );
}

export default Login;