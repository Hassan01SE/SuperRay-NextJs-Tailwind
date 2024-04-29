
import { Divider } from "@nextui-org/react";

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

                <div id="problemstatement" className=" mt-2 w-full h-unit-8xl">
                    <h1 className=" text-4xl md:text-5xl  capitalize  font-semibold mt-2 text-center text-white">What problems does SuperRay solve?</h1>


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