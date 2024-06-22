import { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import ChatBox from './ChatBox';
import { Tooltip } from "@nextui-org/tooltip";

const ChatIcon = ({ report }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="fixed bottom-6 right-6 z-50">
                <Tooltip color={'warning'} showArrow={true} content={<div className="text-small  text-white">AI Radiologist</div>}>
                    <button onClick={toggleChat} className="w-16 h-16 bg-orange-500 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 focus:outline-none">
                        <FaRobot className="text-white text-3xl" />
                    </button>
                </Tooltip>
            </div>
            {isOpen && <ChatBox report={report} closeChat={toggleChat} />}
        </div>
    );
};

export default ChatIcon;
