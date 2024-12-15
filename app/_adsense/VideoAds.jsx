import React, { useEffect } from 'react';

const VideoAds = ({ dataAdSlot, onAdClose }) => {
    useEffect(() => {
        try {
          
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
          console.log(error.message);
    }
    console.log("video add render");
    
        // Simulate ad close after a certain time (e.g., 30 seconds)
        const adDuration = 10000; // 30 seconds
        const timer = setTimeout(() => { 
          onAdClose();
        }, adDuration);
    
        return () => clearTimeout(timer);
      }, [onAdClose]);

  return (
    <div className="bg-white w-full h-40 text-center p-2">
      <span className='text-black font-bold'>
        <p>Wait Download will Start</p>
      </span>
    <ins
      className="adsbygoogle" 
      style={{ display: "block", backgroundColor:"black" }}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID}
      data-ad-slot={dataAdSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
    </div>
  );
};

export default VideoAds;