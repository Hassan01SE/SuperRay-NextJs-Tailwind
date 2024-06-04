'use client';
import { useState } from 'react';



const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://your-backend-api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Your message has been sent successfully.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Failed to send the message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending your message.');
        }
    };

    return (

        <main className="mt-24 mb-6 min-h-screen  text-slate-200 w-full">
            <div className=" w-full flex flex-col items-center">
                <h1 className="text-5xl font-bold mb-5 text-center">Contact Us</h1>
                <form onSubmit={handleSubmit} className="bg-black outline dark:outline-none dark:bg-blue-950 md:w-[650px] p-8 rounded-lg shadow-lg space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300" htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-2 p-3 w-full bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-2 p-3 w-full bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300" htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-2 p-3 w-full bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            rows="6"
                            required
                        ></textarea>
                    </div>
                    <div className="text-right">
                        <button
                            type="submit"
                            className="bg-orange-400 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Contact;