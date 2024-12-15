'use client'

import Breadcrumb from '../../_components/Breadcrumb'
import ProductList from '../../_components/ProductList'
import ProjectInfo from '../../_components/ProjectInfo'
import { CartContext } from '../../_context/CartContext'
import GlobalApi from '../../_utils/GlobalApi'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

function ProjectDetail({params}) {

    const [productDetail,setProductDetail] = useState(null)
    const [filterItem,setFilterItem]= useState(null)

    //use to get path for breadcrum
    const path = usePathname();

    // when ever card change run btn disable
    const { cart, setCart } = useContext(CartContext)
    const { user } = useUser()

    useEffect(()=>{
        
        
        getProductById_()
       
        
        
    },[])

    // useEffect(()=>{
    //   checkBuy_()
    // },[user])


    // if cart already have item disable button
    const [btnDisabled,setBtnDisabled] = useState(false)
    // const [btnDisabledBuy,setBtnDisabledBuy] = useState(false)

    useEffect( () =>  {
      
      cart?.data?.map((item,index)=>{
          if(item.attributes?.products?.data[0]?.id==productDetail?.id){
              setBtnDisabled(true)
              
          }
      })
      
  },[cart,productDetail])

    const getProductById_=async()=>{
         GlobalApi.getProductById(params?.projectId)
        .then(res=>{
            setProductDetail(res.data.data)
            console.log(res.data.data);
            
            
        
            getProductByCategory(res.data.data.attributes.Category)
            
        })
       
    }

    const getProductByCategory=(cat)=>{
            GlobalApi.getProductByCategory(cat)
            .then(res=>{
                
                
                setFilterItem(res?.data?.data)
                
            })
            
    }

    

    // const checkBuy_=async()=>{
    //   const res = await GlobalApi.checkBuy(user?.primaryEmailAddress?.emailAddress,params?.projectId)
    //   if(res?.data?.status === "not present"){
    //     setBtnDisabledBuy(false)
    //   }
    //   else{
    //     setBtnDisabledBuy(true)
    //   }
      
    // }

  return (
    <div className='p-5 py-10 px-10 md:px-20'>
        <Breadcrumb path={path} />

       <ProjectInfo info={productDetail} btnDisabled = {btnDisabled}  />

       <div >
       <div className='flex  justify-between items-center mt-5'>
      <h2 className='font-bold text-lg sm:text-xl md:text-2xl my-3'>Related Projects</h2>
      <Link href={"/category/"+productDetail?.attributes?.Category}>
      <div className='bg-transparent text-base sm:text-lg md:text-xl my-3 font-bold text-button1'>
        View more
      </div>
      </Link>
      </div>
      {filterItem&&<ProductList productItem={filterItem} />}
      </div>
       </div>
      
    
  )
}

export default ProjectDetail
