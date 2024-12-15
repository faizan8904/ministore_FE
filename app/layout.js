'use client';

import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { CartContext } from "./_context/CartContext";
import { useState } from "react";
import Script from "next/script";
import Ads from "./_adsense/Ads";
import ParagraphAds from "./_adsense/ParagraphAds";

const inter = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <html lang="en">
      <head>
        <Script
          async
          
          data-adbreak-test="on"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script id="adsbygoogle-init" strategy="afterInteractive">
        
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
        
      </head>

      <body className={inter.className}>
        <ClerkProvider>
          <CartContext.Provider value={{ cart, setCart }}>
            <Header />
            {children}
            <Footer/>
          </CartContext.Provider>
        </ClerkProvider>



      </body>
    </html>
  );
}
