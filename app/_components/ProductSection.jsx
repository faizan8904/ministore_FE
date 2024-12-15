'use client'

import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import GlobalApi from '../_utils/GlobalApi'
import Link from 'next/link';

function ProductSection() {

    const [productItem,setProductItem] = useState(null);

    const [pythonProduct,setPythonProduct] = useState([])
    const [dbmsProduct,setDBMSProduct] = useState(null)
    const [wallpaperProduct,setWallpaperProduct] = useState([])
    useEffect(()=>{
        getLatestProducts_()
        
    },[])

    useEffect(()=>{
      getProductByCategory_("wallpaper")
      getProductByCategory_("python")
      getProductByCategory_("dbms")
    },[productItem])

    const getLatestProducts_  =()=>{
        GlobalApi.getLatestProducts()
        .then(res=>{
            console.log(res.data.data);
            
            setProductItem(res.data.data)
        })
        .catch(err=>console.log("error")
        )
    }

   

    const getProductByCategory_ = async(category)=>{
      if(productItem){
        const list = productItem.filter((item)=> item.attributes.Category === category)
      console.log("below produtc item "+category);
      
      console.log(list);
     
      
      if(category=="python"){
        setPythonProduct(list)
      }
      else if(category=="dbms"){
        setDBMSProduct(list)
      }
      else if(category=="wallpaper"){
        setWallpaperProduct(list)
      }
      }
      
      
    }


  return productItem&&(
    // latest 
    <div className='px-10 mt-10 lg:px-20'>
      <div className='flex justify-between items-center'>
      <h2 id='pythonProject' className='font-bold text-lg sm:text-xl md:text-2xl my-3'>Python Project</h2>
      <Link href={'/category/python'}>
      <div className='bg-transparent text-base sm:text-lg md:text-xl my-3 font-bold text-button1'>
        View more
      </div>
      </Link>
      </div>
      <ProductList productItem={pythonProduct}/>

    {/* wallpaper  */}
      <div className='flex justify-between items-center mt-5'>
      <h2 className='font-bold text-lg sm:text-xl md:text-2xl my-3'>DBMS</h2>
        <Link href={'/category/wallpaper'}>
      <div className='bg-transparent text-base sm:text-lg md:text-xl my-3 font-bold text-button1'>
        View more
      </div>
      </Link>
      </div>
      <ProductList productItem={dbmsProduct}/>

      {/* // Assets  */}
    <div className='flex justify-between items-center mt-5'>
      <h2 className='font-bold text-lg sm:text-xl md:text-2xl my-3'>Wallpapers</h2>
      <Link href={'/category/assets'}>
      <div className='bg-transparent text-base sm:text-lg md:text-xl my-3 font-bold text-button1'>
        View more
      </div>
      </Link>
      </div>
      <ProductList productItem={wallpaperProduct}/>
    </div>

    

  )
}

export default ProductSection
