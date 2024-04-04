
import bannerimage from '../public/radiologyai.jpg'

export default function Home() {
  return (
    <div className="min-h-screen  w-full ">

      <div id="banner" className=" flex flex-col-reverse items-center justify-evenly w-full mt-20 h-unit-9xl sm:p-12 p-4 bg-blue-900 sm:flex-row sm:items-start sm:justify-normal sm:h-unit-8xl">

        <div className="w-full flex flex-col justify-evenly items-center max-h-full sm:w-3/4 sm:items-start">
          <h1 className="text-5xl text-center font-semibold sm:text-5xl sm:text-start md:text-6xl lg:text-8xl">Welcome to SuperRay</h1>

          <p className="max-w-md text-center text-md mt-4 text-slate-300 font-semibold sm:text-start sm:w-1/2 sm:mt-6 sm:text-md lg:text-lg">GAN Powered Platform For Super Resolution
            Assessment & Diagnostic For Medical Imaging.</p>

          <button type="button" class="mt-4 bg-[#F4A261] hover:border-white hover:border-2 rounded-md w-48 h-10  sm:mt-6 sm:w-60 sm:h-14 md:text-xl">Try It Now</button>
        </div>

        <div className="w-full flex flex-col items-center sm:w-1/2">
          <img className='w-[300px] h-[300px] lg:w-[450px] lg:h-[400px] rounded-md' src="https://d2c0db5b8fb27c1c9887-9b32efc83a6b298bb22e7a1df0837426.ssl.cf2.rackcdn.com/19039197-cervical-acdf-736x833.gif" />
        </div>
      </div>

      <section id='fracture-section' className='flex flex-col-reverse items-center justify-evenly w-full'>



      </section>

    </div>
  );
}
