import Navigation from "@/components/navigation/Navigation";
import "./globals.css";
import { Poppins } from 'next/font/google';
import { Play } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Head from "next/head";

const poppins = Poppins({
  weight: ['100', '200', '300','400','500','600','700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <Head>
        <link rel="icon" href="/assets/icons/favicon.ico" />
      </Head>
      <body className={poppins.className}>
        <header>
            <Navigation/>
        </header>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
