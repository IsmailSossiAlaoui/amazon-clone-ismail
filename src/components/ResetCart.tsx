import { resetCart } from '@/store/nextSlice'
import React from 'react'
import { useDispatch } from 'react-redux'



const ResetCart = () => {
    const dispatch = useDispatch()
    const handleResetCart = () => {
        const confirmReset = window.confirm('Are you sure you want to abandon your cart?' )
        if (confirmReset) {
            dispatch(resetCart())
        }
        
    }
  return (

<button onClick={handleResetCart} className='w-44 h-10 bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white '>
    Reset Cart
</button>  )
}

export default ResetCart