import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Divider } from "@nextui-org/react";
import Link from 'next/link'


const ConnectCard = ({ member }) => {

    const gmail = `mailto:${member.mail}`;
    return (
        <div className="w-full p-2 mt-2 mb-2 h-full dark:bg-blue-950 bg-gray-900">
            <div className="flex gap-3">
                <div className="flex flex-col  mb-2">
                    <p className="text-lg font-semibold">Connect with me on</p>
                </div>
            </div>
            <Divider className="bg-gray-700 dark:bg-gray-600" />
            <div className="flex flex-col gap-3 mt-2 mb-2">
                <div className="flex items-center gap-3">
                    <FaLinkedin size={24} />
                    <Link rel="noopener noreferrer" target="_blank" href={member.linkedin}>LinkedIn</Link>
                </div>
                <Divider className="bg-gray-700 dark:bg-gray-600" />
                <div className="flex items-center gap-3">
                    <FaGithub size={24} />
                    <Link rel="noopener noreferrer" target="_blank" href={member.github}>GitHub</Link>
                </div>
                <Divider className="bg-gray-700 dark:bg-gray-600" />
                <div className="flex items-center gap-3">
                    <FaEnvelope size={24} />
                    <Link rel="noopener noreferrer" target="_blank" href={gmail}>Gmail</Link>
                </div>
            </div>
            <Divider />
            <div className="mt-2 mb-2">
                <p className="text-center text-sm text-slate-400 dark:text-default-500">Looking forward to connecting with you!</p>
            </div>
        </div>
    );
}

export default ConnectCard;