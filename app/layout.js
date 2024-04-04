
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/partials/Navbar";
import { Footer } from "@/components/partials/Footer";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})



export const metadata = {
  title: "Super Ray",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className='dark scroll-smooth' class={roboto.className} lang="en">
      <body className=" flex min-h-screen flex-col  justify-between bg-slate-100 dark:bg-gradient-to-b dark:from-blue-900 dark:to-blue-500" >
        <Providers>
          <Navbar />
          <main className="flex flex-grow">
            {children}

          </main>

          <Footer />
        </Providers>
      </body>
    </html >
  );
}
