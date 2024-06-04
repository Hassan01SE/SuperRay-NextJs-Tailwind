const Licensing = () => {
    return (
        <main className="mt-24 mb-2 min-h-screen p-6 text-slate-200  mx-auto">

            <section>
                <title>Licensing Agreement</title>
            </section>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">Licensing Agreement</h1>
                <p className="mb-6">Last updated: June 04, 2024</p>
                <p className="mb-6">This Licensing Agreement (&quot;Agreement&quot;) is entered into by and between SuperRay (&quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;) and the user (&quot;You&quot; or &quot;Your&quot;) who accesses and uses our AI-based medical diagnostic services (&quot;Service&quot;). By using the Service, You agree to be bound by the terms and conditions of this Agreement.</p>

                <h2 className="text-3xl font-semibold mb-4">License Grant</h2>
                <p className="mb-6">The Company grants You a limited, non-exclusive, non-transferable, revocable license to access and use the Service strictly in accordance with this Agreement.</p>

                <h2 className="text-3xl font-semibold mb-4">Restrictions</h2>
                <p className="mb-4">You agree not to, and You will not permit others to:</p>
                <ul className="list-disc list-inside mb-6">
                    <li className="mb-2">License, sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Service.</li>
                    <li className="mb-2">Modify, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Service.</li>
                    <li className="mb-2">Access the Service in order to build a similar or competitive service.</li>
                    <li className="mb-2">Use the Service for any unlawful purpose or in violation of any applicable laws or regulations.</li>
                </ul>

                <h2 className="text-3xl font-semibold mb-4">Ownership</h2>
                <p className="mb-4">The Service and all rights therein are and shall remain Company&apos;s property. Neither this Agreement nor Your use of the Service conveys or grants to You any rights:</p>
                <ul className="list-disc list-inside mb-6">
                    <li className="mb-2">In or related to the Service, except for the limited license granted above.</li>
                    <li className="mb-2">To use or reference in any manner Company’s company names, logos, product and service names, trademarks or services marks.</li>
                </ul>

                <h2 className="text-3xl font-semibold mb-4">Medical Disclaimer</h2>
                <p className="mb-6">The AI diagnostics provided by our Service are intended for research and educational purposes only and should not be solely relied upon for clinical decision-making. They are designed to assist healthcare professionals, such as radiologists, by providing supplementary information. The Company does not warrant that the AI diagnostic results are accurate, complete, or free from error, and they should be used in conjunction with professional medical advice. Always seek the guidance of qualified healthcare providers with any questions you may have regarding a medical condition or diagnosis.</p>

                <h2 className="text-3xl font-semibold mb-4">Termination</h2>
                <p className="mb-6">We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach this Agreement. Upon termination, Your right to use the Service will cease immediately.</p>

                <h2 className="text-3xl font-semibold mb-4">Limitation of Liability</h2>
                <p className="mb-4">In no event shall the Company be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, health, or other intangible losses, resulting from:</p>
                <ul className="list-disc list-inside mb-6">
                    <li className="mb-2">Your use or inability to use the Service.</li>
                    <li className="mb-2">Any unauthorized access to or use of our servers and/or any personal information stored therein.</li>
                    <li className="mb-2">Any interruption or cessation of transmission to or from the Service.</li>
                    <li className="mb-2">Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our Service by any third party.</li>
                    <li className="mb-2">Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Service.</li>
                </ul>

                <h2 className="text-3xl font-semibold mb-4">Governing Law</h2>
                <p className="mb-6">This Agreement and any dispute arising out of or in connection with this Agreement shall be governed by and construed in accordance with the laws of Pakistan.</p>

                <h2 className="text-3xl font-semibold mb-4">Changes to this Agreement</h2>
                <p className="mb-6">We may update this Agreement from time to time. We will notify You of any changes by posting the new Agreement on this page. You are advised to review this Agreement periodically for any changes. Changes to this Agreement are effective when they are posted on this page.</p>

                <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-6">If you have any questions about this Agreement, You can contact us:</p>
                <ul className="list-disc list-inside mb-6">
                    <li className="mb-2">By visiting this page on our website: <a href="https://superray.vercel.app/contact" className="text-orange-400 hover:underline" rel="external nofollow noopener" target="_blank">https://superray.vercel.app/contact</a></li>
                </ul>
            </div>


        </main>
    );
}

export default Licensing;