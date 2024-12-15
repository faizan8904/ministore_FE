"use client";
import React, { useEffect } from 'react';

const ParagraphAds = ({ dataAdSlot }) => {
  useEffect(() => {
    try {
      
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error", e);
    }
  }, []);  // Ensure this runs only once after the ad component is mounted

  return (
    <div className="bg-white p-2 mt-5 mb-5">
      <ins
      key={1}
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center", backgroundColor:"black" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID}
        data-ad-slot={dataAdSlot}
      ></ins>
    </div>
  );
};

export default ParagraphAds;
