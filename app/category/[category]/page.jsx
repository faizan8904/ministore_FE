'use client'

import ParagraphAds from '../../_adsense/ParagraphAds';
import Breadcrumb from '../../_components/Breadcrumb';
import ProductList from '../../_components/ProductList';
import GlobalApi from '../../_utils/GlobalApi'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function Category({params}) {

   console.log(params);

   //use to get path for breadcrum
   const path = usePathname();
   const [productItem,setProductItem] = useState(null)
   

    useEffect(()=>{
            getProductByCategory_()
    },[])

    const  getProductByCategory_ = async ()=>{

        const response = await GlobalApi.getProductByCategory(params?.category)
        console.log(response);
        setProductItem(response?.data?.data)
        
    }
  return (
   <section className='min-h-screen px-5 sm:px-0 '>
    <h2 className='text-center my-10 text-white font-bold'>Category : {params?.category.toUpperCase()}</h2>
    <div className='px-[-10px] w-full'>
    <ParagraphAds
        dataAdSlot="550217767"
      />
    </div>
    <div className='ml-10'>
    <Breadcrumb  path={path} />
    </div>
    <div className='px-10  mt-10 lg:px-20'>
    {productItem&&<ProductList productItem={productItem}/>}
</div>
    </section>
  )
}

export default Category
