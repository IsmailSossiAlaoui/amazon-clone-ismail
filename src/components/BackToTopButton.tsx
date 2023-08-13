import React from 'react'
import { useState,useEffect } from 'react'

const BackToTopButton = () => {
const [backToTop,setBackToTop] = useState(false);
useEffect(() =>{
    window.addEventListener('scroll',()=>{
        if(window.scrollY > 100) {
            setBackToTop(true);
        }
        else{
            setBackToTop(false);
        }
    })
},[]);
const scrollUP =() => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
  return (
    <div> 
        {
            backToTop && (
                <button onClick={scrollUP} className='w-full items-center justify-center bg-amazon_light/90 py-5 text-white font-bold text-xl h-20'>backtoTop</button>
            )
        }
         </div>
  )
}

export default BackToTopButton