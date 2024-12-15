"use client";  

import React, { useEffect } from "react";  

const Ads = ({ dataAdSlot, dataAdFormat, dataFullWidthResponsive }) => {  
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error", e);
    }
  }, []);  // Ensure this runs only once after the ad component is mounted

  return ( 
    <div className="bg-white p-2"> 
      <ins   
      key={2}
        
        className="adsbygoogle"  
        style={{ display: "block", backgroundColor: "black" }}  
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID}  
        data-ad-slot={dataAdSlot}  
        data-ad-format={dataAdFormat}  
        data-full-width-responsive={dataFullWidthResponsive.toString()}  
      />  
    </div>
  );  
};  

export default Ads;
