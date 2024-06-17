import { MdErrorOutline, MdClose } from "react-icons/md";
import { useState } from "react";

const Alert = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        isVisible ? setIsVisible(false) : setIsVisible(true);

    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="mt-2 mb-2 p-2 w-full max-w-md mx-auto">
            <div className="flex items-center justify-between bg-red-500 text-white text-sm font-bold px-4 py-3 rounded-md" role="alert">
                <div className="flex items-center">
                    <MdErrorOutline className="mr-2 text-xl" />
                    <span>{message}</span>
                </div>
                <button onClick={handleClose} className="focus:outline-none">
                    <MdClose className="text-xl" />
                </button>
            </div>
        </div>
    );
};

export default Alert;
