import { StateProps, StoreProduct } from '@/pages/type'
import React from 'react'
import {SiMediamarkt} from 'react-icons/si'
import { useSelector } from 'react-redux'
import {useState,useEffect} from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { useSession } from "next-auth/react";

const CartPayment = () => {
    const {productData,userInfo} = useSelector((state:StateProps)=>state.next);
    const [totalAmount, setTotalAmount] = useState(0)
    useEffect(()=>{
        let amt=0;
        productData.map((item:StoreProduct) =>{
            amt += item.price *item .quantity;
            return
        })
        setTotalAmount(amt)
    },[productData])
    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      );
      const { data: session } = useSession();
    
      const handleCheckout = async () => {
        const stripe = await stripePromise;
    
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ items: productData, email: session?.user?.email }),
        });
        const checkoutSession = await response.json();
    
        // Redirecting user/customer to Stripe Checkout
        const result: any = await stripe?.redirectToCheckout({
          sessionId: checkoutSession.id,
        });
        if (result.error) {
          alert(result?.error.message);
        }
      };
  return (
    <div className='flex flex-col gap-4 items-center justify-center h-fit'>
        <div className='flex gap-4 px-5'>
        <span className='bg-green-600 rounded-full p-1 h-6 text-sm text-white flex items-center justify-center mt-1 '> <SiMediamarkt /> </span>
        <p className='text-md'>Your items qualify for FREE shipping by choosing this option at checkout,See details...</p>
        </div>
        <p className='flex items-center justify-center px-2 font-bold text-lg '>
            Total: &nbsp;
            <span>{totalAmount.toFixed(2)}$</span>
        </p>
       { userInfo ? (
         <div>
         <button onClick={handleCheckout} className='w-full h-10 text-sm font-semibold bg-amazon_blue  text-white rounded-lg mb-4 px-4 hover:bg-amazon_yellow hover:text-amazon_blue '>Proceed To Buy</button>
     </div>
       ) :
       <div>
         <button className='w-full h-10 text-sm font-semibold bg-amazon_blue bg-opacity-50 text-white rounded-lg cursor-not-allowed mb-4 px-4'>Proceed To Buy</button>
         <p className='text-red-500 text-sm'>Please login to continue...</p>
     </div>
         
       }
    </div>
  )
}

export default CartPayment