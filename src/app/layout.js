import Navigation from "@/components/navigation/Navigation";
import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300','400','500','600','700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="container">
          <header>
            <Navigation/>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
