'use client'

import { saveAs } from 'file-saver';
import Image from "next/image";
import Hero from "./_components/Hero";
import ProductSection from "./_components/ProductSection";
import GlobalApi from "./_utils/GlobalApi";
import Ads from './_adsense/Ads';
import ParagraphAds from './_adsense/ParagraphAds';

export default function Home() {





  return (
    <div>
      <Hero></Hero>
      {/* latest product section */}
      <Ads
        dataAdFormat="auto"
        dataFullWidthResponsive={true}
        dataAdSlot="5740744081"
      />
      <ProductSection />
      

      <ParagraphAds
        dataAdSlot="550217767"
      />
      


    </div>
  );
}
