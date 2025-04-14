const { default: axios } = require("axios")

const apikey = process.env.NEXT_PUBLIC_REST_API_KEY
const apiUrl = process.env.NEXT_API_URL


const axiosClient = axios.create({
    baseURL: apiUrl,
    headers:{
        Authorization:`Bearer ${apikey}`
    }
})

const getLatestProducts=() => axiosClient.get('/products?populate=*');

const getProductById=(id)=>axiosClient.get('/products/findById/'+id+'?populate=*')

const getProductByCategory=(category)=> axiosClient.get('/products?filters[Category][$eq]='+category+'&populate=*')

// add to cart 
const addToCart=(data)=>axiosClient.post('/carts',data)

//get User cart Item based on email
const getUserCartItems=(email)=>axiosClient.get('/carts?populate[products][populate][0]=image&filters[email][$eq]='+email)


// delete cart item
const deleteCartItem=(id)=>axiosClient.delete('/carts/'+id)

// find order by id and email
const getDownload =(data)=> axiosClient.post('/orders/verify-and-fetch-file',data)

const getOrders = (email) => axiosClient.get(`/orders/find-by-email/${email}`);


const checkBuy = (email, productId) => {
    return axiosClient.get('/orders/check-buy', {
      params: {
        email: email,
        productId: productId
      }
    });
  };

  // cashfree page
  //order create

  const paymentOrderCreate =(orderDetails)=> axiosClient.post('/cashfree/create', orderDetails);

  const verifyOrder =(sessionID,orderID,productList,orderDetails )=> axiosClient.post('/cashfree/verify', {
                                                                              sessionID, 
                                                                              orderID, 
                                                                              productList, 
                                                                              orderDetails 
                                                                            })

  

export default{
    getLatestProducts,
    getProductById,
    getProductByCategory,
    addToCart,
    getUserCartItems,
    deleteCartItem,
    getOrders,
    getDownload,
    checkBuy,
    verifyOrder,
    paymentOrderCreate
}
