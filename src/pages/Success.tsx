import React from 'react'
import Link from "next/link"
import { useDispatch } from 'react-redux'
import { resetCart } from '@/store/nextSlice';

const Success = () => {
  const dispatch = useDispatch();
  return (
    <div className='flex flex-col gap-2 items-center justify-center py-20'>
    <h1 className='text-2xl text-hoverBg font-semibold'>Thank you for shopping in ismail's Amazon</h1>
    <Link 
    className='tex-lg text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:first-letter:text-blue-600 duration-300'
    href={"/"} onClick={()=> dispatch(resetCart())
    }>
      <p>Continue Shopping</p>
    </Link>
  </div>
    )
}

export default Success