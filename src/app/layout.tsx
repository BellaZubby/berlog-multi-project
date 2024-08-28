import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useState } from "react";
import { contactData,socialsData  } from "./hook/data";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Berlog Multi Project",
  description: "Berlog-website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{

 
  
  return (
    <html lang="en">
      <head>

      </head>
      <body className={inter.className}>
       
          <Navbar/>
         {children} 
         <Footer data={contactData} dataSocial={socialsData}/>
      </body>
    </html>
  );
}
