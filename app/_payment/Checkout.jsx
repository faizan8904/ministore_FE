import { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { load } from "@cashfreepayments/cashfree-js";
import { useUser } from '@clerk/nextjs';
import { CartContext } from '../_context/CartContext';
import GlobalApi from '../_utils/GlobalApi';

const Checkout = ({ cart, totalAmount }) => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cashfree, setCashfree] = useState(null);  // Store cashfree instance in state
  const { user } = useUser();
  const { setCart } = useContext(CartContext);
  const [paymentFailed,setpaymentFailed] = useState(false)

  useEffect(() => {
    // Initialize Cashfree SDK once when component mounts
    const initializeSDK = async () => {
      const cashfreeInstance = await load({
        mode: "sandbox"
      });
      setCashfree(cashfreeInstance);  // Store the loaded SDK instance
    };

    initializeSDK();
  }, []);  // Empty dependency array ensures this runs only once on mount

  const generateOrderId = () => `ORDER-${uuidv4()}`;
  const generateCustomerId = () => `CUS-${uuidv4()}`;

  
  const handleCheckout = async () => {
    const phoneNumberPattern = /^[6-9][0-9]{9}$/;
    if (!phoneNumber || phoneNumber.length !== 10 || !phoneNumberPattern.test(phoneNumber)) {
      alert('Please enter a valid phone number.');
      setPhoneNumber('');
      return;
    }

    setLoading(true);
    const orderId = generateOrderId();
    const customerId = generateCustomerId();

    try {
      const orderDetails = {
        order_amount: totalAmount,
        customer_id: customerId,
        customer_name: `${user?.firstName ?? ''} ${user?.lastName ?? ''}`.trim(),
        customer_email: user?.primaryEmailAddress.emailAddress,
        customer_phone: phoneNumber,
        order_note: 'Test order'
      };

      const response = await GlobalApi.paymentOrderCreate(orderDetails)
      const data = response.data;

      if (data && data.data && cashfree) {
        let sessionID = data.data.payment_session_id;
        let orderID = data.data.order_id;

        let checkoutOptions = {
          paymentSessionId: sessionID,
          redirectTarget: '_modal',
        };

        // Now cashfree.checkout should be available
        cashfree.checkout(checkoutOptions)
          .then((res) => {
            console.log("Payment successful:", res);

            const productList = cart?.data?.map(item => item.attributes.products.data[0].id);
            

            
            GlobalApi.verifyOrder(sessionID,orderID,productList,orderDetails)
            .then(verifyResponse => {
              console.log("Verification response:", verifyResponse.data);
              if(verifyResponse.data?.success === false){
                setpaymentFailed(true);
                setTimeout(() => {
                    setpaymentFailed(false);
                }, 3000);
              }
              else{
              const getUserCartItems_ = () => {
                GlobalApi.getUserCartItems(user?.primaryEmailAddress.emailAddress)
                  .then(res => {
                    console.log(res);
                    console.log("above is getCart data ");
                    
                    setCart(res.data)
            
                  })
                }
            
            
              

              getUserCartItems_()
              }
            })
            .catch(error => {
              console.error("Error during verification:", error);
            });
          })
          .catch(error => {
            console.error("Error during checkout:", error);
          });
      } else {
        console.error('Error creating payment session or loading Cashfree SDK:', data);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }

    setLoading(false);
  };

  return (
    <div className="space-y-3 mt-6">
      <label className="w-full text-black px-1 py-2 font-bold">Enter your Phone Number</label>
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="9999-999-999"
        required
        maxLength={10}
        className="w-full text-black px-3 py-2 border rounded-lg"
      />
      <button
        onClick={handleCheckout}
        disabled={!phoneNumber || phoneNumber.length !== 10 || paymentFailed }
        type="button"
        className={`flex w-full ${paymentFailed?" bg-red-500 ":(phoneNumber.length !== 10 ? "bg-slate-500" : "bg-button1 hover:bg-purple-500")} items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4`}
      >
        {paymentFailed?"Payment Failed":(loading ? 'Processing...' : 'Checkout')}
      </button>
    </div>
  );
};

export default Checkout;
