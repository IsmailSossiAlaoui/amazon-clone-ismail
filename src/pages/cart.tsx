import React from 'react'
import { useSelector } from 'react-redux'
import { StateProps, StoreProduct } from './type'
import CartProduct from '../components/CartProduct'
import ResetCart from '@/components/ResetCart'
import Link from 'next/link'
import CartPayment from '@/components/CartPayment'
const Cart = () => {
    const {productData} = useSelector((state:StateProps)=>state.next);

    console.log

  return (
    <div className='mx-auto px-6 grid grid-cols-5 gap-10 py-4'>
        {
            productData.length > 0 ? (
                <>
                <div className='bg-white xl:col-span-4 p-4 rounded-lg col-span-5'>
                    <div className='flex items-center justify-between  border-b-[1px] my-5 py-5'>
                        <p className='text-base md:text-2xl font-semibold text-amazon_blue'>Shopping Cart:</p>
                        <p className='text-base md:text-2xl font-semibold text-amazon_blue'>Sub total:</p>
                    </div>
                    <div className='flex justify-between flex-col gap-3 '>
                    {productData.map((item: StoreProduct) => (
                <div key={item._id}>
                  <CartProduct item={item} />
                </div>
              ))}
              <ResetCart />
                    </div>
                </div>
                <div className='bg-white h-fit xl:col-span-1 rounded-lg items-center justify-center flex col-span-5 py-4'>

                <CartPayment />
                </div>
               </>
            ) : <div className='bg-white h-[50vh] flex justify-center gap-3 items-center flex-col w-full col-span-5 rounded-lg'>
                <h1 className='font-medium text-2xl'>Your cart is empty!</h1>
                <Link href={'/'} className='bg-amazon_blue text-white p-4 rounded-2xl px-6 font-semibold'>go to shopping</Link>
            </div>
        }
    </div>
  )
}

export default Cart