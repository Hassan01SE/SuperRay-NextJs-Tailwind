'use client'
import Image from "next/image";
import uploadicon from '../../public/uploadicon.png'
import logo from '../../public/logo.png'
import fileicon from '../../public/iconfile.png'
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Spinner } from "@nextui-org/react";
import axios from 'axios';

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";


const fileTypes = ["JPG", "PNG", "JPEG"];

const Detect = () => {

    const [generatedImage, setGeneratedImage] = useState(null);
    const [isActive, setActive] = useState(false);
    const [file, setFile] = useState(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [loaderText, setloadertext] = useState('Detecting Fractures ...');
    const [isfiledrop, setFileDrop] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [btntext, setBtnText] = useState('Detect');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleChange = (file) => {
        setFile(file);
        setFileDrop(true);
    };

    const removeFile = () => {
        setFile(null);
        setFileDrop(false);
    }

    const generateReport = async () => {
        if (!file) return; // No file selected

        setActive(true); // Show loader
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/detect-fractures/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setloadertext('Findings Completed');
            setGeneratedImage(response.data.image);
            onOpen();
            console.log(response.data); // Assuming the response is the generated image

        } catch (error) {

            if (error.response && error.response.status === 403) {
                alert('Only medical image allowed');
            } else {
                alert('Something went wrong');
            }
            console.error('Error generating report:', error);
            // Handle error
        } finally {
            setActive(false); // Hide loader
            setFile(null);
            setFileDrop(false);
        }
    };



    const LoaderDiv = ({ loaderText }) => {
        return (
            <div className=" rounded-lg z-10 justify-center absolute self-center  w-[350px] h-[400px] md:w-[850px] md:h-[500px] bg-black out border border-white dark:border-none dark:bg-blue-800 flex flex-col items-center animate-splash">
                <Image className='w-[400px]  md:w-[450px]  lg:w-[550px]' src={logo} alt="logo" />
                <p className='text-center text-md lg:text-2xl font-semibold text-white uppercase'>{loaderText}</p>
                <Spinner size='lg' color="white" className='mt-4' />

            </div>
        )
    }

    const XrayModal = ({ generatedImage }) => {


        return (
            <Modal
                size='5xl'
                isOpen={isOpen}
                onClose={onClose}
                isDismissable={false} isKeyboardDismissDisabled={true}
                className="dark"
            >
                <ModalContent>
                    {(onClose) => (
                        <div className="dark:bg-black bg-[#000210 flex flex-col items-center">
                            <ModalHeader className="flex flex-col gap-1 text-3xl">Fracture Detected</ModalHeader>
                            <Image className="mt-2 self-center mb-2 w-[300px] md:w[450px]" width={300} height={300} src={`data:image/jpeg;base64,${generatedImage}`} alt="xray img" />
                            <ModalBody className="dark">
                                <p>
                                    <span className="font-bold">Findings:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores fuga ullam nihil eum dolorum illum incidunt porro facere, repudiandae deserunt.
                                </p>

                            </ModalBody>
                            <ModalFooter>
                                {/* <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button> */}
                            </ModalFooter>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        )
    }



    return (
        <div className=" min-h-screen w-full flex flex-col px-2 py-4 mt-20">

            {isActive && <LoaderDiv loaderText={loaderText} />}

            <XrayModal generatedImage={generatedImage} />

            <div className="flex flex-col items-center justify-start h-full">

                <h1 className="capitalize text-2xl font-semibold text-center sm:text-3xl md:text-4xl lg:text-5xl ">Fracture Detection by AI</h1>

                <div id="uploadcontainer" className="w-[80%] mt-6 h-[300px] md:h-[350px] lg:w-[70%] lg:h-[400px] xl:w-[60%] dark:bg-white bg-[#010000] shadow-md rounded-md   outline-gray-200 outline-dotted flex flex-col items-center">

                    <Image className=" w-[75px]  sm:w-[150px]" src={uploadicon} alt="upload cloud icon" />

                    <FileUploader required={true} hoverTitle="Drop here" handleChange={handleChange} name="file" types={fileTypes} >
                        <div className=" max-w-full flex items-center justify-evenly w-[250px]  md:w-[400px] h-[50px] rounded-sm outline-blue-500 outline-dashed">

                            <Image className=" w-[20px] sm:w-[30px]" src={fileicon} alt="upload cloud icon" />

                            <p className=" w-[80%] text-xs capitalize font-semibold text-white  dark:text-blue-900 cursor-pointer sm:w-[80%] sm:text-md"> {isfiledrop ? <span className="underline font-bold">Uploaded Successfully!</span> : <span> <u className="font-bold"> Upload!</u> or Drag and Drop a medical image. <b>[PNG/JPG]</b> </span>}</p>



                        </div>

                    </FileUploader>

                    <div className="flex flex-row items-center justify-around max-w-full mx-1">
                        <p className=" max-w-[90%] overflow-x-hidden mt-2 mr-2 capitalize text-white dark:text-slate-500">{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
                        {isfiledrop && <button onClick={removeFile} >&#10060;</button>}
                    </div>

                    <button onClick={generateReport} className=" mt-10 sm:mt-8 font-semibold bg-gradient-to-r from-[#F4A261] to-[#E76F51] hover:from-[#E76F51] hover:to-[#F4A261] hover:border-white hover:border-2 rounded-md w-1/2 h-10  sm:w-60 sm:h-14 md:text-xl focus:outline-none ">{btntext}</button>

                </div>


            </div>



        </div>
    );
}

export default Detect;