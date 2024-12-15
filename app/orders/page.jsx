'use client'

import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import Link from 'next/link'

function Orders() {
  const { user } = useUser()
  const [orders, setOrders] = useState(null)
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    getOrders_()
  }, [user])

  const getOrders_ = async () => {
    const response = await GlobalApi.getOrders(user?.primaryEmailAddress?.emailAddress)
    setOrders(response.data)
  }

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Order ID copied to clipboard!')
    }).catch(err => {
      console.error('Failed to copy: ', err)
    })
  }

  const handleGetDoc = async (orderID,email,id) => {
    try {
        const response = await GlobalApi.getDownload(
            {orderId:orderID, productId: id, userEmail: email }
        );

        console.log(response);
        
        const fileUrl = response.data.fileUrl; // This will be the proxy endpoint

        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'filename.pdf'; // You can set a default filename here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        getOrders_()
       
    } catch (error) {
        console.error('Error fetching the file URL:', error);
    }
};

  return (
    <section className='bg-white h-screen'>
      {orders?.length>0?
    <div className="p-4">
      {orders?.map((order, index) => (
        <div key={index} className="mb-4 shadow-lg rounded-md text-black bg-white">
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div className='font-[600] w-[40%] text-[0.8rem] sm:text-[1.1rem]'>{order?.products?.title}</div>
            <div className='font-[500] w-[35%] flex flex-col text-center text-[0.8rem] sm:text-[1rem]'>
              <span>Date</span>
              <span>{order?.date.slice(2).split('-').reverse().join('-')}</span>
              
            </div>
            <div className=' flex flex-col'>
            <span className='font-[600] text-[0.6rem] sm:text-[0.9rem]'>Download Limit : {order?.downloadLimit}</span>
            <button onClick={(event)=>{
              event.stopPropagation();
              handleGetDoc(order.orderId,order.userEmail,order.products.id)
                }}
                disabled={order?.downloadLimit==0}
                 className={` ${order?.downloadLimit==0?" bg-slate-500 ":" bg-indigo-500 text-white "}text-[0.8rem] sm:text-[1rem] px-4 py-2 rounded-md`}>Download</button>
                 </div>
          </div>
          {activeIndex === index && (
            <div className="p-4 border-t">
              <div className="flex flex-col md:flex-row justify-between">
              <span className="mb-2 text-center md:mb-0 text-[0.8rem] sm:text-[1rem]"><p>Price</p> <p>₹{order?.products?.price}</p></span>
                <span className="mb-2 text-center md:mb-0 text-[0.8rem] sm:text-[1rem]"><p>Transaction ID</p> <p>{order.transactionId}</p></span>
                <span className="mb-2   text-center md:mb-0 text-[0.8rem] sm:text-[1rem]"><p>Order ID</p> 
                <p
                className="cursor-pointer bg-slate-200 w-fit px-10 rounded-md mx-auto "
                onClick={() => copyToClipboard(order.orderId)}
                >{order.orderId.slice(0,20)}...</p>
                </span>
                <Link href={'/project-detail/'+order.products?.id} ><span className="bg-green-500 text-white px-4 py-2 text-[0.8rem] sm:text-[1rem] text-center rounded-md">View</span></Link>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>:
    <div className='text-black justify-center items-center flex h-[100vh] w-full font-bold text-3xl'>
    <p>No Order Yet</p>
    </div>
  }
    </section>
  )
}

export default Orders