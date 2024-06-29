'use client'
import Image from "next/image";
import uploadicon from '../../public/uploadicon.png'
import logo from '../../public/logo.png'
import fileicon from '../../public/iconfile.png'
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Spinner } from "@nextui-org/react";
import axios from 'axios';
import { useSession, status } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Modal, ModalContent, Button, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { MdErrorOutline, MdClose } from "react-icons/md";

import useAxiosAuth from "../../utils/hooks/useAxiosAuth";



const fileTypes = ["JPG", "PNG", "JPEG"];

const Upload = () => {

    const axiosAuth = useAxiosAuth();

    const router = useRouter();
    const { data: session, status } = useSession();

    const [generatedImage, setGeneratedImage] = useState(null);
    const [diagnoseReport, setGeneratedDiagnose] = useState(null);
    const [domain, setDomain] = useState(null);
    const [isActive, setActive] = useState(false);
    const [file, setFile] = useState(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [loaderText, setloadertext] = useState('Generating your report ...');
    const [isfiledrop, setFileDrop] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [btntext, setBtnText] = useState('Generate Report');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [viewBtn, setViewBtn] = useState('Save Report');
    const [isMedicalImage, setIsMedicalImage] = useState(true);
    const [alertError, setAlertError] = useState();


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
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}super-resolution/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setloadertext('Your Report has been generated!');
            setGeneratedImage(response.data.image);
            setGeneratedDiagnose(response.data.xreport);
            setDomain(response.data.domain);
            onOpen();
            setIsMedicalImage(true);
            console.log(response.data); // Assuming the response is the generated image

        } catch (error) {

            if (error.response && error.response.status === 403) {
                setAlertError('Only medical image allowed');
                setIsMedicalImage(false);
            } else {
                setAlertError('Something went wrong');
                setIsMedicalImage(false);
            }
            console.error('Error generating report:', error);
            // Handle error
        } finally {

            setActive(false); // Hide loader
            setFile(null);
            setFileDrop(false);
            setloadertext('Generating your report ...');

        }
    };

    const saveReport = async () => {
        try {
            const accessToken = session.user.access;;
            if (!accessToken) throw new Error('Access token not found');

            setViewBtn('Saving ..')
            // Convert base64 image to blob
            const byteCharacters = atob(generatedImage);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'image/jpeg' });

            // Create a File object from the blob
            const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });

            // Create FormData and append the File
            const formData = new FormData();
            formData.append('image', file);
            formData.append('diagnose', diagnoseReport);
            formData.append('domain', domain);

            /* const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}save-report`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `JWT ${accessToken}`
                }
            }); */
            const response = await axiosAuth.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}save-report`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            // Handle success response
            setViewBtn('Redirecting ..')
            console.log(response.data);
            router.push(`/reports/${response.data.id}`);
        } catch (error) {
            // Handle error
            console.error('Error saving report:', error);
            setAlertError("Due to some problem, report cannot be saved!");
            setIsMedicalImage(false);
            onClose();
        }
        finally {
            setViewBtn('Redirecting ..');
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

    const XrayModal = ({ generatedImage, diagnoseReport }) => {


        return (
            <Modal
                size='5xl'
                isOpen={isOpen}
                onClose={onClose}
                isDismissable={false} isKeyboardDismissDisabled={true}

            >
                <ModalContent>
                    {(onClose) => (
                        <div className="flex flex-col items-center dark:bg-black bg-[#000210]">
                            <ModalHeader className="flex text-3xl flex-col gap-1">Medical Report</ModalHeader>
                            <Image className="mt-2 self-center mb-2 w-[300px] md:w[450px]" width={300} height={300} src={`data:image/jpeg;base64,${generatedImage}`} alt="medical img" />
                            <ModalBody >
                                <p className=" overflow-y-hidden max-h-24">
                                    <span className="font-bold">AI Diagnose:</span> {diagnoseReport} ..
                                </p>

                                <p className="mt-2 font-bold capitalize">NOTE: {status === 'authenticated' ? "[SAVE TO VIEW DETAILED REPORT AND HAVE ACCESS TO AI QUERY BOT]" : "[Sign In to save reports and have access to the AI Query Bot]"}</p>

                            </ModalBody>
                            <ModalFooter className="w-1/2">
                                {status === 'authenticated' &&
                                    <>
                                        <button onClick={saveReport} className=" w-full inline-block rounded bg-gradient-to-r from-[#F4A261] to-[#E76F51] hover:from-[#E76F51] hover:to-[#F4A261] px-6 pb-2 pt-2.5 text-lg font-medium  leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-info-accent-300 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong" onPress={onClose}>
                                            {viewBtn}
                                        </button>
                                        {/*  <button className="w-1/2 inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-sm md:text-lg font-medium  leading-normal text-white shadow-warning-3 transition duration-150 ease-in-out hover:bg-danger-accent-300 hover:shadow-warning-2 focus:bg-danger-accent-300 focus:shadow-danger-2 focus:outline-none focus:ring-0 active:bg-danger-600 active:shadow-warning-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                                            Download PDF
                                        </button> */}
                                    </>
                                }
                            </ModalFooter>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        )
    }



    return (
        <div className=" min-h-screen w-full flex flex-col px-2 py-4 mt-20">

            {!isMedicalImage && (<div className="mt-2 mb-2 p-2 w-full max-w-md mx-auto">
                <div className="flex items-center justify-between bg-red-500 text-white text-sm font-bold px-4 py-3 rounded-md" role="alert">
                    <div className="flex items-center">
                        <MdErrorOutline className="mr-2 text-xl" />
                        <span>{alertError}</span>
                    </div>
                    <button onClick={() => { setIsMedicalImage(true) }} className="focus:outline-none">
                        <MdClose className="text-xl" />
                    </button>
                </div>
            </div>)}

            {isActive && <LoaderDiv loaderText={loaderText} />}

            <XrayModal generatedImage={generatedImage} diagnoseReport={diagnoseReport} />

            <div className="flex flex-col items-center justify-start h-full">

                <h1 className="capitalize text-3xl font-semibold text-center sm:text-3xl md:text-4xl lg:text-5xl ">Upload your medical image</h1>

                <div id="uploadcontainer" className="w-[85%] mt-6 h-[320px] md:h-[350px] lg:w-[70%] lg:h-[400px] xl:w-[60%] dark:bg-white bg-[#010000] shadow-md rounded-md   outline-gray-200 outline-dotted flex flex-col items-center">

                    <Image className=" w-[75px]  sm:w-[150px]" src={uploadicon} alt="upload cloud icon" />

                    <FileUploader required={true} hoverTitle="Drop here" handleChange={handleChange} name="file" types={fileTypes} >
                        <div className=" max-w-full flex items-center justify-evenly w-[250px]  md:w-[400px] h-[50px] rounded-sm outline-blue-500 outline-dashed">

                            <Image className=" w-[20px] sm:w-[30px]" src={fileicon} alt="upload cloud icon" />

                            <p className=" w-[80%] text-xs capitalize font-semibold text-white  dark:text-blue-900 cursor-pointer sm:w-[80%] sm:text-md"> {isfiledrop ? <span className="underline font-bold">Uploaded Successfully!</span> : <span> <u className="font-bold"> Upload!</u> or Drag and Drop a medical image. <b>[PNG/JPG]</b> </span>}</p>



                        </div>

                    </FileUploader>

                    <div className="flex flex-row items-center justify-around w-full">
                        <p className="max-w-full overflow-x-hidden mt-2 mr-2 capitalize text-white dark:text-slate-500">{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
                        {isfiledrop && <button onClick={removeFile} >&#10060;</button>}
                    </div>

                    <button onClick={generateReport} className=" mt-10 sm:mt-8 font-semibold bg-gradient-to-r from-[#F4A261] to-[#E76F51] hover:from-[#E76F51] hover:to-[#F4A261] hover:border-white hover:border-2 rounded-md w-1/2 h-10  sm:w-60 sm:h-14 md:text-xl focus:outline-none ">{btntext}</button>

                </div>


            </div>



        </div>
    );
}

export default Upload;