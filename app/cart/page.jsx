'use client'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../_context/CartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faChevronDown, faChevronUp, faTag, faTrash } from '@fortawesome/free-solid-svg-icons';
import GlobalApi from '../_utils/GlobalApi';
import ErrorAlert from '../_components/ErrorAlert';
import Checkout  from '../_payment/Checkout.jsx';

function Cart() {

  const { cart, setCart } = useContext(CartContext)

  const [openIndex, setOpenIndex] = useState(null);

  //coupon
  const [showCouponInput, setShowCouponInput] = useState(false);

  //eror 
  const [showError,setShowError] = useState(false)
  //error message
  const errMessage = {
    title: "Something went wrong",
    msg: "unable to remove item from card please try later"
};



  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // total calculation 
  const [money, setMoney] = useState({
    subtotal: 0,
    tax: 0,
    discount: 0,
    total: 0,
    savings: 0,
  });

  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const COUPON_CODE = '12345';
  const DISCOUNT_PERCENTAGE = 10; // Assuming a 10% discount for the coupon

  // Function to calculate the cart values
  const calculateCartValues = () => {
    console.log("calculation started");

    let subtotal = 0;

    console.log("below cart");
    
    console.log(cart);

    cart.data?.forEach((product) => {
      

      subtotal += product.attributes.products.data[0].price;


    });

    const tax = subtotal * 0.02; // Assuming a 10% tax rate
    const discount = couponApplied ? (subtotal * DISCOUNT_PERCENTAGE) / 100 : 0;
    const total = subtotal + tax - discount;
    const savings = discount || 0;

    setMoney({
      subtotal,
      tax,
      discount,
      total,
      savings,
    });

    console.log(total + 'ddd');
    console.log(money);


  };

  // Calculate the values when the component mounts or cart updates
  useEffect(() => {
    calculateCartValues();

  }, [cart]);

  // Function to apply the coupon
  const [coupenBtn,setCouponBtn] = useState(false)
  const applyCoupon = () => {
    console.log("apply coupon strated");

    if (coupon === COUPON_CODE) {
      setCouponApplied(true);
      setCouponBtn(true)
      calculateCartValues()
      
    } else {
      alert('Invalid coupon code');
    }
  };

  const deleteCartItem_ = (id) => {
    GlobalApi.deleteCartItem(id)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setShowError(true);
        setTimeout(() => {
            setShowError(false);
        }, 4000); 
      }
      )

      
  }

  



  return (
    <section className='bg-white'>
      {showError&&<ErrorAlert errMessage={errMessage} />}
      {cart?.data?.length <=0?
      <div className='text-black justify-center items-center flex h-[100vh] w-full font-bold text-3xl'>
        <p>Cart is Empty</p>
        </div>
      :<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto ">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
          </header>

          <div className="mt-8">
            <div className=' flex gap-10 flex-col-reverse md:flex-row'>
              {/* right list  */}
              <ul className="space-y-4 flex-1 ">

                {Array.isArray(cart?.data) ? cart.data.map((item, index) => {
                  console.log("below item");
                  
                  console.log(item);

                  return <li key={index} className="flex flex-col items-start gap-4 p-4 border rounded-md shadow-md">
                    <div className="flex items-center gap-4 w-full">
                      <img
                        src={item.attributes?.products?.data[0]?.image[0]?.url}
                        alt="item"
                        className="w-16 h-16 rounded object-cover"
                      />
                      <div className="flex-grow">
                        <h3 className="text-sm text-gray-900">{item.attributes?.products?.data[0]?.title}</h3>
                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                          <div>
                            <dt className="inline">Price: </dt>
                            <dd className="inline font-bold">₹ {item.attributes?.products?.data[0]?.price}</dd>
                          </div>
                        </dl>
                      </div>
                      <button
                        className="text-gray-600 transition hover:text-purple-600"
                        onClick={() => toggleDescription(index)}
                      >
                        <FontAwesomeIcon icon={openIndex === index ? faChevronUp : faChevronDown} />
                      </button>
                      <button onClick={() => deleteCartItem_(item.id)} className="text-gray-600 transition hover:text-red-600">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                    {/* Conditionally render the description */}
                    {openIndex === index && (
                      <div className="mt-2 text-sm text-gray-700">
                        <p>
                          {/* Replace this with your actual description data */}
                          {item.attributes?.products?.data[0]?.description || "Description not available."}
                        </p>
                      </div>
                    )}
                  </li>
                }) : <div className='h-[120px] w-[130px] bg-gray-700 animate-pulse'>

                </div>

                }
              </ul>

              {/* left payment  */}

              <div className="mt-6 w-full flex-1 space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md  p-6 border rounded-md shadow-md">
                <div className="flow-root">
                  <div className="-my-3 ">
                    <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-normal text-gray-500">Subtotal</dt>
                      <dd className="text-base font-medium text-gray-900">₹{money.subtotal.toFixed(2)}</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-normal text-gray-500">Savings</dt>
                      <dd className="text-base font-medium text-green-500">₹{money.savings.toFixed(2)}</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-normal text-gray-500">Tax</dt>
                      <dd className="text-base font-medium text-gray-900">₹{money.tax.toFixed(2)}</dd>
                    </dl>



                    <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-bold text-gray-900">Total</dt>
                      <dd className="text-base font-bold text-gray-900">₹{money.total.toFixed(2)}</dd>
                    </dl>
                  </div>
                </div>

                {/* Coupon Section */}
                <div className="flex justify-between items-center mt-4">
                  <button
                    
                    onClick={() => setCouponApplied(!couponApplied)}
                    className="flex items-center justify-center rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
                  >
                    <FontAwesomeIcon icon={faTag} className="mr-2" />
                    Apply Coupon
                  </button>
                </div>

                {couponApplied && (
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      className="border border-gray-300 text-black rounded-lg px-4 py-2 text-sm w-full"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      disabled={coupenBtn}
                    />
                    <button
                      className={`mt-2 w-full  ${coupenBtn?" bg-slate-500 ":" bg-button1  hover:bg-purple-500 "}  text-white px-4 py-2 rounded-lg`}
                      onClick={applyCoupon}
                      disabled={coupenBtn}
                    >
                      Apply
                    </button>
                  </div>
                )}

                {/* payment setcion  */}

               <Checkout cart={cart} totalAmount={money.total}/>
              </div>


            </div>
          </div>
        </div>
      </div>}
    </section>
  );
}

export default Cart
