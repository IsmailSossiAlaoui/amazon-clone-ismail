import Image from "next/image";
import logo from "../../../public/images/logo.png"
import carIcon from "../../../public/images/cartIcon.png"
import {BiCaretDown} from "react-icons/bi"
import {HiOutlineSearch} from "react-icons/hi"
import {SlLocationPin} from "react-icons/sl"
import { useSelector,useDispatch } from "react-redux";
import { StateProps } from "@/pages/type";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
import {useEffect} from 'react'
import { addUser } from "@/store/nextSlice";




const Header = () => {
    const { data: session } = useSession()
const {productData,favoriteData,userInfo}= useSelector((state:StateProps)=>state.next);

const dispatch = useDispatch()

useEffect(()=>{
    if(session) {
        dispatch(addUser({
            name:session?.user?.name,
            email:session?.user?.email,
            image:session?.user?.image
        }) 
            

        )
    }
},[session,dispatch])
  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50 ">
    <div className="h-full w-full mx-auto inline-flex items-center justify-between px-4">
        <Link href={"/"} className="lg:px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%] ">
        <Image src={logo} alt="logo" className="w-16 xl:w-28 object-cover mt-1"/>
        </Link>
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300  items-center justify-center h-[70%]  md:inline-flex gap-1 text-[10px] lgl:text-base  hidden">
            <SlLocationPin />
        <div>
            <p >Deliver to</p>
            <p className="text-white font-bold uppercase">USA</p>
        </div>
        </div>
        <div className="w-[50%] h-10  md:inline-flex items-center justify-between relative hidden">
          <input className="w-full h-full rounded-md px-2 placeholder:text-[10px] lgl:placeholder:text-sm  text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow" type="text" placeholder="Search amazon products" /> 
          <span className="w-8 lgl:w-12 h-full bg-amazon_yellow text-black lgl:text-2xl text-sm flex items-center justify-center absolute right-0 rounded-tr-md">
        <HiOutlineSearch />
        </span>
        </div>
        
        { userInfo? 
                <div 
                
                className="lg:text-sm text-[10px] text-gray-100 flex items-center gap-2 px-2 border border-transparent hover:border-white duration-300 h-[70%] cursor-pointer">
                <img src={userInfo.image} alt="user-image"  className="w-8 h-8 rounded-full object-cover"/>
                <div className="md:text-xs  text-[8px] text-gray flex flex-col justify-between">
                    <p className="text-white font-bold">{userInfo.name}</p>
                    <p>{userInfo.email}</p>

                </div>
                </div>
                :
                <div 
        onClick={() => signIn()}
        className="text-[10px] lgl:text-sm text-gray-100 flex-flex-col justify-center px-2 border border-transparent hover:border-white duration-300 h-[70%] cursor-pointer">
            <p>Hello, sign in</p>
            <p className="text-white font-bold items-center">
                Account & Lists {" "}
                <span>
                    <BiCaretDown />
                </span>
            </p>
        </div>

        }
        
        <Link href={'/'}  className="text-[10px] lgl:text-sm text-gray-100 flex-flex-col  px-2 border border-transparent  hover:border-white duration-300  flex justify-center flex-col h-fit">
            <p>Market</p>
            <p className="text-white font-bold">& Favorite</p>
            <span >
                {favoriteData ? <span  className="text-center border-[1px] border-gray-400 flex justify-center items-center text-amazon_yellow" suppressHydrationWarning >{favoriteData.length}  </span> : 0}
            </span>
 
        </Link>
        <Link href={'/Cart'} className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%} relative">
            <Image src={carIcon} alt="cartIcon" className="w-8 object-contain h-9 lg:w-auto"/>
            <p className="text-[10px] lgl:text-lg text-white font-bold mt-3">Cart
            <span  suppressHydrationWarning  className="absolute text-amazon_yellow text-xs lgl:text-lg -top-1 left-[22px] lgl:left-[31px] font-semibold text-center">{productData? productData.length :0 }</span>
                </p>
        </Link>
    </div>
    </div>
  )
}

export default Header