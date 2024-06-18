
import { Divider } from "@nextui-org/react";
import Image from "next/image";

import unskilledtechnicianimag from '../../public/unskilledtechnician.jpg';
import problem3img from '../../public/inconsistentreport.jpg'
import probimgscattered from '../../public/probimgscattered.jpg'

const About = () => {

    return (
        <div className="w-full min-h-screen mt-20 mx-6  ">

            <div className="flex flex-col w-full">

                <div className="flex flex-col w-full h-screen justify-center animate-fadein">
                    <h1 className=" text-5xl text  font-semibold  text-center text-white md:text-6xl">Our Aim</h1>

                    <figure class=" mt-6 mb-12">
                        <blockquote class="relative rounded-3xl bg-black  py-12 pl-14 pr-8 dark:bg-blue-900 dark:from-blue-900 dark:to-blue-900 dark:hover:from-blue-900 dark:hover:to-blue-900 ease-linear">
                            <p
                                class="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                                Our aim is to revolutionize healthcare by harnessing the power of artificial intelligence and deep learning to enhance medical imaging, enabling more accurate diagnoses and improving patient outcomes.
                            </p>
                        </blockquote>
                        <figcaption class="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
                            &#8212; Founders of SuperRay
                        </figcaption>
                    </figure>
                </div>

                <Divider className="my-2 mx-16  self-center  dark:bg-slate-400 bg-white"></Divider>

                <div id="problemstatement" className=" mt-2 mb-6 w-full min-h-screen ">
                    <h1 className=" text-4xl md:text-5xl  capitalize  font-semibold mt-2 text-center text-white">What problems does SuperRay solve?</h1>

                    <div className="mt-4  flex flex-col xl:flex-row items-center justify-between ">


                        <div id="problem2" className="flex flex-col w-[300px] lg:w-[400px] mt-4 rounded-md shadow-lg bg-gray-900 dark:bg-blue-900" >

                            <div className="w-full h-1/2" >
                                <Image className="w-[400px] rounded-md" src={unskilledtechnicianimag} />
                            </div>

                            <div className="w-full p-2 h-1/2">
                                <h1 className="text-center text-4xl font-medium uppercase">Unskilled Technician</h1>
                                <p className="text-center text-slate-200 mt-2 text-lg">Inconsistent quality of medical images due to varying levels of technician expertise can affect diagnosis accuracy.</p>
                            </div>
                        </div>

                        <div id="problem1" className="flex flex-col w-[300px] lg:w-[400px] mt-4 rounded-md shadow-lg bg-gray-900 dark:bg-blue-900" >

                            <div className="w-full h-1/2" >
                                <Image className="w-[400px] rounded-md" src={probimgscattered} />
                            </div>

                            <div className="w-full p-2 h-1/2">
                                <h1 className="text-center text-4xl font-medium uppercase">Scattered Radiation</h1>
                                <p className="text-center text-slate-200 mt-2 text-lg">Scattered radiation can degrade the quality of medical images, making it difficult to obtain clear and accurate diagnostic images.</p>
                            </div>
                        </div>

                        <div id="problem3" className="flex flex-col w-[300px] lg:w-[400px] mt-4 rounded-md shadow-lg bg-gray-900 dark:bg-blue-900" >

                            <div className="w-full h-1/2" >
                                <Image className="w-[400px] rounded-md" src={problem3img} />
                            </div>

                            <div className="w-full p-2 h-1/2">
                                <h1 className="text-center text-4xl font-medium uppercase">Inconsistent Reports</h1>
                                <p className="text-center text-slate-200 mt-2 text-lg">Variability in diagnostic reports due to human error and differing levels of experience among radiologists can impact patient outcomes.</p>
                            </div>
                        </div>

                    </div>

                </div>

                <Divider className="my-2 mx-16  self-center  dark:bg-slate-400 bg-white"></Divider>
                <div id="team" className=" mt-2 w-full h-unit-8xl">
                    <h1 className=" text-5xl md:text-6xl  font-semibold mt-2 text-center text-white">Our Team</h1>
                </div>

            </div>

        </div>
    );
}

export default About;