import React from 'react'
import Image from 'next/image';
import '../_styles/ProductItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


function ProductItem({product}) {
    const singleItem = product?.attributes
  return (
 <Link href={'/project-detail/'+product.id}>
       <div>
     <div className="relative h-[300px] md:h-[350px] flex overflow-hidden w-full lg:max-w-[24rem] flex-col rounded-xl bg-bgDark bg-clip-border text-white shadow-lg">
     {singleItem.isFree&&<div className='bg-indigo-500 absolute flex justify-center items-center right-2 top-1 w-20 h-10 rounded-md z-10'>
      <p className='text-white font-bold text-xl '>Free</p>
     </div>}
    <div className="relative flex-1 md:mx-2 lg:mx-4 md:mt-4  overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">

    
      <Image
        src={singleItem.image?.data[0]?.url}
        alt="banner"
        layout="fill" 
      className="rounded-sm"
      fill
      style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
    </div>
    <div className="p-2 flex-1 md:p-4">
      <div className="flex items-center justify-between mb-3">
        <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
          {singleItem.title}
        </h5>
      </div>
      <p className="block font-sans text-base antialiased font-light md:leading-relaxed text-white line-clamp">
            {singleItem.description}
            </p>
      <div className="px-3 md:px-6 mt-5  flex items-center justify-between ">
        <h5 className="block font-sans text-xl  md:text-2xl lg:text-3xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
        <FontAwesomeIcon icon={faIndianRupee} className=' h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 mr-2' />
          {singleItem.price}
        </h5>
      </div>
      
    </div>
    
  </div>
  </div>
 </Link>

     
  )
}

export default ProductItem
