import { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import ChatBox from './ChatBox'; // Assuming you save ChatBox component in the same directory

const ChatIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="fixed bottom-6 right-6 z-50">
                <button onClick={toggleChat} className="w-16 h-16 bg-orange-500 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 focus:outline-none">
                    <FaRobot className="text-white text-3xl" />
                </button>
            </div>
            {isOpen && <ChatBox closeChat={toggleChat} />}
        </div>
    );
};

export default ChatIcon;
