import React from 'react'
import ProductItem from './ProductItem'
import SquareAds from '../_adsense/SqaureAds'

function ProductList({productItem}) {
  return (
    <div className='grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-5'>
      {
        productItem?.map((item, index) => index<=3&&(
              <ProductItem key={index} product={item} />
          )
      )
    }
        {/* <div className='bg-white p-2'>
    <SquareAds
      dataAdSlot="6531227402"
    />
    </div> */}
    </div>
  )
}

export default ProductList
