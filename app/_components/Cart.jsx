import React, { useContext } from 'react'
import { CartContext } from '../_context/CartContext'

function Cart() {

    const { cart, setCart } = useContext(CartContext)

    console.log("this is cart jx");

    console.log(cart);

    return (
        <div className='h-[350px] w-[250px] bg-gray-100 z-10 rounded-md 
                    absolute mx-10 -right-2 md:right-5 lg:right-10 top-14 p-5    '>


            <div className="mt-2 space-y-6">
                <div className='space-y-4 h-[200px] overflow-auto '>
                    <ul className="">

                        {Array.isArray(cart?.data) ? cart.data.map((item, index) => {
                           return <li className="flex items-center mt-2 gap-4">
                            <img
                                src={item.attributes?.products?.data[0]?.image[0]?.url}
                                alt=""
                                className="size-16 rounded object-cover"
                            />

                            <div>
                                <h3 className="text-sm text-gray-900">{item.attributes?.products?.data[0]?.title}</h3>

                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                    <div>
                                        <dt className="inline">Price: </dt>
                                        <dd className="inline">₹ {item.attributes?.products?.data[0]?.price}</dd>
                                    </div>

                                    
                                </dl>
                            </div>
                        </li>
                        }):<div className='h-[120px] w-[130px] bg-gray-700 animate-pulse'>

                        </div>

                        }
                    </ul>
                </div>

                <div className="space-y-4 text-center">


                    <a
                        href="/cart"
                        className="block rounded bg-button1 px-5 py-3 text-sm text-gray-100 transition hover:bg-purple-400"
                    >
                        View my cart ({cart?.data?.length})
                    </a>

                    <a
                        href="/"
                        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                    >
                        Continue shopping
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Cart
