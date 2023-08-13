import React from 'react'
import Link from 'next/link'
import {useState} from 'react';
import { motion } from 'framer-motion';
import {AnimatePresence} from 'framer-motion';
import {VscClose, VscChevronRight } from 'react-icons/vsc'
import { useSelector,useDispatch } from 'react-redux';
import { StateProps } from '@/pages/type';
import {signOut} from 'next-auth/react'
import { removeUser } from "@/store/nextSlice";


const ButtomHeader = () => {
const {userInfo} =useSelector((state:StateProps)=>state.next)
const [isOpen, setisOpen] = useState(false);
const dispatch = useDispatch()
const handleClick = () => {
    setisOpen(!isOpen);
    console.log(isOpen);
}
const handleSignout = () => {
  signOut();
  dispatch(removeUser())
}

  return (
    <div>
    <div className='flex items-center justify-start  bg-amazon_light text-white duration-300 text-xs lg:text-sm lg:px-7 lg:gap-5'>
      
        <button className='flex items-center gap-2 border border-transparent hover:border-white duration-300 p-3' onClick={handleClick}>
        <div className='flex items-center flex-col gap-1 '>
            <span className='md:w-7 md:h-1 bg-white w-4 h-[2px] '></span>
            <span className='md:w-7 md:h-1 bg-white w-4 h-[2px]'></span>
            <span className='md:w-7 md:h-1 bg-white w-4 h-[2px]'></span>
        </div>
        <p className='md:text-lg font-bold text-xs'>All</p>
        </button>
     

        <div className='flex items-center justify-between md:gap-4  gap-4 '>
        <Link href='/' className='border border-transparent hover:border-white duration-300 md:p-3 sml:text-base text-xs '>Today's Deals</Link>
        <Link href='/' className='border border-transparent hover:border-white duration-300 md:p-3 sml:text-base text-xs'>Customer Service</Link>
        <Link href='/' className='border border-transparent hover:border-white duration-300 md:p-3 sml:text-base text-xs'>Gift Cards</Link> 
        <Link href='/' className='border border-transparent hover:border-white duration-300 md:p-3 sml:text-base text-xs'>Sell</Link>
        { userInfo && (
        <button onClick={handleSignout} className='border border-transparent hover:border-white duration-300 p-3 text-red-400'>Sign out</button>)
      }
                
        </div>
        
     </div>
     <AnimatePresence >
    {isOpen && (
       <motion.div className='h-fit' >
         <motion.div initial={{ opacity: 0 }}
       animate={{ opacity: 0.7 }}
       transition={{ease: 'easeInOut'}}
       exit={{ opacity:0}} id='overlay' className='fixed top-0 left-0 w-full  bg-amazon_light opacity-50 z-50 h-full '  >
         </motion.div>
         <motion.div  initial={{ x: '-100vw'}}
       animate={{ x: 0}}
       transition={{ease: 'easeInOut'}}
       exit={{ x: '-100vw'}} id='side-nav' className='max-w-sm w-5/6 h-full  fixed z-[100] top-0 left-0 bg-white overflow-hidden '>
        
                <Link href={'/'} className='bg-amazon_light w-full text-center text-3xl font-bold py-5 text-white flex justify-center'>Hello, sign in</Link> 

         <div id='main-container' className='absolute w-full h-full overflow-y-scroll'>

          <div id='sidenavContentHeader' className ='  text-black  w-full py-4 mt-1 '>
                 <h3 className='text-xl font-bold px-10  py-2 capitalize'>Digital content & Devices</h3>
                 </div>
                 <div>
                <Link href={'/'} className='flex items-center px-10 pr-6 py-3 justify-between w-full hover:bg-black/10'>Amazon Music <VscChevronRight className ='text-3xl' /></Link>
                <Link href={'/'} className='flex items-center px-10 pr-6 py-3 justify-between w-full hover:bg-black/10'>Kindle E-readers & Books <VscChevronRight className ='text-3xl' /></Link>
                <Link href={'/'} className='flex items-center px-10 pr-6 py-3 justify-between w-full hover:bg-black/10'>Amazon Appstore<VscChevronRight className ='text-3xl' /></Link>
                </div>
             
             <div className='flex  text-black flex-col w-full border-b-2 py-4 '>
                 <h3 className='text-xl font-bold px-10  py-2 capitalize'>Digital content & Devices</h3>
                <Link href={'/'} className='flex items-center px-10 pr-6 py-3 justify-between w-full hover:bg-black/10'>Amazon Music <VscChevronRight className ='text-3xl' /></Link>
                <Link href={'/'} className='flex items-center px-10 pr-6 py-3 justify-between w-full hover:bg-black/10'>Kindle E-readers & Books <VscChevronRight className ='text-3xl' /></Link>
                <Link href={'/'} className='flex items-center px-10 pr-6 py-3 justify-between w-full hover:bg-black/10'>Amazon Appstore<VscChevronRight className ='text-3xl' /></Link>
             </div>              
             <div className='flex  text-black flex-col w-full border-b-2 py-4 '>
                 <h3 className='text-xl font-bold px-10  py-2 capitalize'>Digital content & Devices</h3>
                <Link href={'/'} className='flex items-center px-10 pr-6 py-3 justify-between w-full hover:bg-black/10'>Amazon Music <VscChevronRight className ='text-3xl' /></Link>
                <Link href={'/'} className='flex items-center px-10 pr-6 py-3 justify-between w-full hover:bg-black/10'>Kindle E-readers & Books <VscChevronRight className ='text-3xl' /></Link>
                <Link href={'/'} className='flex items-center px-10 pr-6 py-3 justify-between w-full hover:bg-black/10'>Amazon Appstore<VscChevronRight className ='text-3xl' /></Link>
             </div>
             <div className='flex  text-black flex-col w-full border-b-2 py-4 '>
                 <h3 className='text-xl font-bold px-10  py-2 capitalize'>Digital content & Devices</h3>
                <Link href={'/'} className='flex items-center px-10 pr-6 py-3 justify-between w-full hover:bg-black/10'>Amazon Music <VscChevronRight className ='text-3xl' /></Link>
                <Link href={'/'} className='flex items-center px-10 pr-6 py-3 justify-between w-full hover:bg-black/10'>Kindle E-readers & Books <VscChevronRight className ='text-3xl' /></Link>
                <Link href={'/'} className='flex items-center px-10 pr-6 py-3 justify-between w-full hover:bg-black/10'>Amazon Appstore<VscChevronRight className ='text-3xl' /></Link>
             </div>
       
      



         </div>
         </motion.div>
         
          <motion.button  initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ease: 'easeInOut'}}
       exit={{ opacity:0}} onClick={handleClick} className='fixed top-0 left-0 ml-[80vw]  md:ml-[390px] z-[100]'> <VscClose className='text-white text-6xl'/></motion.button>
     
      </motion.div>
      
       ) } 
         </AnimatePresence>  
       
    </div>
  )
}

export default ButtomHeader