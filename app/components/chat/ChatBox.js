import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';

const ChatBox = ({ closeChat }) => {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [message]);

    const handleSend = async () => {
        if (message.trim()) {
            setChat([...chat, { sender: 'user', text: message }]);
            setMessage('');

            try {
                const response = await axios.post('http://127.0.0.1:8000/api/chat/', { message });
                setChat([...chat, { sender: 'user', text: message }, { sender: 'bot', text: response.data.message }]);
            } catch (error) {
                console.error('Error:', error);
                setChat([...chat, { sender: 'user', text: message }, { sender: 'bot', text: 'Error in fetching response' }]);
            }
        }
    };

    return (
        <div className="fixed bottom-24 right-6 w-80 h-96  bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col">
            <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                <h2 className="text-lg text-white">AI Radiologist Assistant</h2>
                <button onClick={closeChat} className="text-white"><FaTimes /></button>
            </div>
            <div className="flex-1 overflow-y-auto mt-2 space-y-2">
                {chat.map((entry, index) => (
                    <div key={index} className={`flex ${entry.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-2 rounded-lg ${entry.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'}`}>
                            {entry.text}
                        </div>
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>
            <div className="pt-2 border-t border-gray-700">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Type your query..."
                />
                <button onClick={handleSend} className="w-full mt-2 bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600">Send</button>
            </div>
        </div>
    );
};

export default ChatBox;
