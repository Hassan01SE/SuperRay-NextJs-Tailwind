
import "./globals.css";
import SessionWrapper from "./components/SessionWrapper";
import { Providers } from "./providers";
import { Navbar } from "./components/partials/Navbar";
import { Footer } from "./components/partials/Footer";
//import { Roboto } from 'next/font/google';


/* const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
}) */



export const metadata = {
  title: "Super Ray",
  description: "GAN powered platform for xray image super resolution and automated diagnostic report generation",
};

export default function RootLayout({ children }) {
  return (


    <html className='dark transition-transform scroll-smooth' lang="en">
      <body className=" animate-appear flex min-h-screen flex-col  justify-between bg-[#0C0C0C] bg-gradient-to-b from-[#0C0C0C] to-[#0C0C0C]  dark:bg-gradient-to-b dark:from-blue-900 dark:to-blue-500" >
        <SessionWrapper>
          <Providers>
            <Navbar />
            <main className="flex flex-grow">
              {children}

            </main>

            <Footer />
          </Providers>
        </SessionWrapper>
      </body>
    </html >


  );
}
