'use client'
import Image from "next/image";
import uploadicon from '../../public/uploadicon.png'
import fileicon from '../../public/iconfile.png'
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";


const fileTypes = ["JPG", "PNG"];

const Upload = () => {

    const [generatedImage, setGeneratedImage] = useState(null);
    const [file, setFile] = useState(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [loaderText, setloadertext] = useState('Generating your report ...');
    const [isfiledrop, setFileDrop] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [btntext, setBtnText] = useState('Generate Report');

    const handleChange = (file) => {
        setFile(file);
        setFileDrop(true);
    };

    const removeFile = () => {
        setFile(null);
        setFileDrop(false);
    }

    return (
        <div className=" min-h-screen w-full flex flex-col px-2 py-4 mt-20">

            <div className="flex flex-col items-center justify-start h-full">

                <h1 className="capitalize text-2xl font-semibold text-center sm:text-3xl md:text-4xl lg:text-5xl ">Upload your medical image</h1>

                <div id="uploadcontainer" className="w-[80%] mt-6 h-[300px] md:h-[350px] lg:w-[70%] lg:h-[400px] xl:w-[60%] dark:bg-white bg-[#010000] shadow-md rounded-md   outline-gray-200 outline-dotted flex flex-col items-center">

                    <Image className=" w-[75px]  sm:w-[150px]" src={uploadicon} alt="upload cloud icon" />

                    <FileUploader required={true} hoverTitle="Drop here" handleChange={handleChange} name="file" types={fileTypes} children={<div className=" flex items-center justify-evenly w-[250px]  md:w-[400px] h-[50px] rounded-sm outline-blue-500 outline-dashed">

                        <Image className=" w-[20px] sm:w-[30px]" src={fileicon} alt="upload cloud icon" />

                        <p className=" w-[80%] text-xs capitalize font-semibold text-white  dark:text-blue-900 cursor-pointer sm:w-[80%] sm:text-md"> {isfiledrop ? <span className="underline font-bold">Uploaded Successfully!</span> : <span> <u className="font-bold"> Upload!</u> or Drag and Drop a medical image. <b>[PNG/JPG]</b> </span>}</p>



                    </div>} />

                    <div className="flex flex-row items-center justify-around">
                        <p className="mt-2 mr-2 capitalize text-white dark:text-slate-500">{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
                        {isfiledrop && <button onClick={removeFile} >&#10060;</button>}
                    </div>

                    <button className=" mt-10 sm:mt-8 font-semibold bg-gradient-to-r from-[#F4A261] to-[#E76F51] hover:from-[#E76F51] hover:to-[#F4A261] hover:border-white hover:border-2 rounded-md w-1/2 h-12  sm:w-60 sm:h-14 md:text-xl focus:outline-none ">{btntext}</button>

                </div>


            </div>



        </div>
    );
}

export default Upload;