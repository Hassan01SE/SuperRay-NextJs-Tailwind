
import bannerimage from '../public/radiologyai.jpg'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="min-h-screen w-full ">

      <div id="banner" className=" flex flex-col-reverse items-center justify-evenly w-full mt-20 h-[700px] sm:p-12 p-4 bg-black border-b-2 border-b-white dark:border-none dark:bg-blue-900 sm:flex-row sm:items-start sm:justify-normal sm:h-unit-8xl lg:h-unit-9xl">

        <div className="w-full flex flex-col justify-evenly items-center max-h-full sm:w-3/4 sm:items-start xl:mt-2">
          <h1 className="text-5xl xl:max-w-xl text-center font-semibold sm:text-5xl sm:text-start md:text-6xl lg:text-8xl ">Welcome to SuperRay</h1>

          <p className="max-w-md text-center text-md mt-4 text-slate-300 font-semibold sm:text-start sm:w-1/2 sm:mt-6 sm:text-md lg:text-lg">GAN Powered Platform For Super Resolution
            Assessment & Diagnostic For Medical Imaging.</p>

          <button type="button" className="mt-4 font-semibold bg-gradient-to-r from-[#F4A261] to-[#E76F51] hover:from-[#E76F51] hover:to-[#F4A261] hover:border-white hover:border-2 rounded-md w-3/4 h-12 sm:mt-6 sm:w-60 sm:h-14 md:text-xl focus:outline-none ">
            <Link href='/upload'>
              Try It Now
            </Link>
          </button>

        </div>

        <div className="w-full flex flex-col items-center sm:w-1/2">
          <img className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] rounded-md' src="https://d2c0db5b8fb27c1c9887-9b32efc83a6b298bb22e7a1df0837426.ssl.cf2.rackcdn.com/19039197-cervical-acdf-736x833.gif" alt='ai radiology banner pic' />
        </div>
      </div>



      <section id='fracture-section' className='flex flex-col items-center justify-start w-full mt-2 h-[700px] p-4  border-b-2 border-b-white dark:border-none sm:py-12 sm:flex-row sm:items-start sm:justify-start sm:h-unit-10xl lg:h-unit-9xl '>{/*  lg:h-unit-8xl */}

        <div className="w-full flex flex-col mt-4   items-center sm:mt-0 sm:w-1/2 sm:mr-5 lg:mr-5 lg:w-[60%]">
          <img className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] rounded-md' src="https://www.researchgate.net/publication/344302396/figure/fig2/AS:1020769014398985@1620381706746/Fracture-detection-using-artificial-intelligence-on-plain-frontal-wrist-radiographs.jpg" alt='fracture ai' />
        </div>

        <div className='w-full flex flex-col items-center  sm:w-1/2  lg:w-3/4 justify-evenly sm:items-start max-h-full'>
          <h1 className="mt-5 text-3xl text-center text-white font-semibold sm:mt-5 sm:text-4xl sm:text-start md:text-5xl lg:text-6xl">Precision Diagnosis with AI-Powered Fracture Detection.</h1>

          <p className='max-w-md  text-center text-md mt-4 text-slate-200 font-semibold sm:text-start sm:max-w-[80%] sm:mt-6 sm:text-md lg:text-lg'>
            Empower your diagnostic process with our state-of-the-art fracture detection system. Leveraging cutting-edge deep learning algorithms, <span className='text-white font-medium'>SuperRay</span> identifies fractures with unparalleled accuracy, enabling swift and effective treatment decisions.
          </p>

          <button type="button" className="mt-4 self-center font-semibold bg-gradient-to-r from-[#F4A261] to-[#E76F51] hover:from-[#E76F51] hover:to-[#F4A261] hover:border-white hover:border-2 rounded-md w-3/4 h-12 sm:self-start sm:mt-6 sm:w-60 sm:h-14 md:text-xl focus:outline-none ">
            <Link href='/detect'>
              Detect Fractures
            </Link>
          </button>

        </div>

      </section>


      <section id='superresolution-section' className='flex flex-col-reverse items-center justify-end w-full mt-2 h-[700px] p-4 bg-black dark:bg-blue-900  border-b-2 border-b-white dark:border-none sm:p-12 sm:flex-row sm:items-start sm:justify-start sm:h-unit-10xl lg:h-unit-9xl '>{/*  lg:h-unit-8xl */}

        <div className='w-full flex flex-col items-center sm:w-1/2  sm:mr-5 lg:mr-5  lg:w-3/4 justify-evenly sm:items-start max-h-full'>
          <h1 className="mt-5 text-white text-3xl text-center font-semibold sm:mt-5 sm:text-4xl sm:text-start md:text-5xl lg:text-6xl">Enhanced Medical Imaging with Generative AI.</h1>

          <p className='max-w-md text-center text-md mt-4 text-slate-200 font-semibold sm:text-start sm:max-w-[80%] sm:mt-6 sm:text-md lg:text-lg'>
            Experience the transformative power of Generative Adversarial Networks (GANs) in medical imaging. Our advanced AI technology upscales and enhances low-resolution X-rays and CT scans, providing unprecedented clarity and detail for accurate diagnosis.
          </p>
          {/* <button type="button" class="mt-4 self-center font-semibold bg-[#F4A261] hover:border-white hover:border-2 rounded-md w-48 h-12 sm:self-start  sm:mt-6 sm:w-60 sm:h-14 md:text-xl"><Link href='/upload'>Super-Resoluton</Link></button> */}
        </div>

        <div className="w-full flex flex-col items-center mt-5 sm:mt-0 sm:w-1/2  lg:w-[60%]">
          <img className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] rounded-md' src="https://www.mdpi.com/engproc/engproc-31-00084/article_deploy/html/images/engproc-31-00084-g001.png" alt='xray gan' />
        </div>

      </section>

    </div>
  );
}
