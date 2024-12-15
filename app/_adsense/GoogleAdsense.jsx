'use client'
import Script from 'next/script';
import React from 'react'

const GoogleAdsense = ({ pId }) => {
  return (
    <React.Fragment>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
        crossOrigin='anonymous'
        strategy='afterInteractive'
      />
    </React.Fragment>
  )
}

export default GoogleAdsense;