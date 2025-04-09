import { Geist, Geist_Mono, PT_Serif_Caption, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '800', '900']
});

const pT_Serif_Caption = PT_Serif_Caption({
  variable: "--font-PT_Serif_Caption",
  subsets: ["latin"],
  weight: '400',
});

export const metadata = {
  icons: {
    icon: '/me2.ico'
  },
  title: "Fardin Ahsan",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${poppins.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
