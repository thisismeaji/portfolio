import Navigation from "@/components/navigation/Navigation";
import "./globals.css";
import { Poppins } from 'next/font/google';
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
  weight: ['100', '200', '300','400','500','600','700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
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
