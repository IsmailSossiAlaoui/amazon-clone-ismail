import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../public/images/logo.png"

const Footer = () => {
  return (
    <div className='bg-amazon_light'>
    <div className='flex flex-col md:flex-row justify-center text-white md:gap-20 md:p-20 p-10 border-b-2  border-white/70 gap-6 '>
        <div className='flex flex-col  gap-3 '>
            <h4 className='capitalize font-bold text-xl '>Get to know Us</h4>
            <Link href={"/"}>Careers</Link>
            <Link href={"/"}>Blog</Link>
            <Link href={"/"}>About Amazon</Link>
            <Link href={"/"}>Investor Relations</Link>
            <Link href={"/"}>Amazon Devices</Link>
            <Link href={"/"}>Amazon Science</Link>
            </div>

            <div className='flex flex-col gap-3  '>
            <h4 className='capitalize font-bold text-xl '>Make Money with Us</h4>
            <Link href={"/"}>Sell products on Amazon</Link>
            <Link href={"/"}>Sell on Amazon Business</Link>
            <Link href={"/"}>Sell apps on Amazon</Link>
            <Link href={"/"}>Become an Affiliate</Link>
            <Link href={"/"}>Advertise Your Products</Link>
            <Link href={"/"}>Self-Publish with Us</Link>
            <Link href={"/"}>Host an Amazon Hub</Link>
            <Link href={"/"}>›See More Make Money with Us
</Link>

            </div>

            <div className='flex flex-col  gap-3 '>
            <h4 className='capitalize font-bold text-xl  '>	
Amazon Payment Products</h4>
            <Link href={"/"}>Amazon Business Card</Link>
            <Link href={"/"}>Shop with Points</Link>
            <Link href={"/"}>About Amazon</Link>
            <Link href={"/"}>Reload Your Balance</Link>
            <Link href={"/"}>Amazon Currency Converter</Link>
            </div>
            <div className='flex flex-col  gap-3 '>
            <h4 className='capitalize font-bold text-xl  '>	
	
            Let Us Help You</h4>
            <Link href={"/"}>Amazon and COVID-19</Link>
            <Link href={"/"}>Your Account</Link>
            <Link href={"/"}>Your Orders</Link>
            <Link href={"/"}>Shipping Rates & Policies</Link>
            <Link href={"/"}>Returns & Replacements</Link>
            <Link href={"/"}>Manage Your Content and Devices</Link>
            <Link href={"/"}>Amazon Assistant</Link>
            <Link href={"/"}>Help</Link>

            </div>
            </div>
            <div className='flex justify-center gap-10 py-20 flex-col md:flex-row items-center '>
            <Image src={logo} alt="logo" className="object-contain w-28 object-center"/>
            <div className='flex gap-3 text-white'>
                <button className='p-3 border border-white '><Link href={'/'}> English</Link></button>
                <button className='p-3 border border-white '><Link href={'/'}> U.S.D US Dollars</Link></button>
                <button className='p-3 border border-white '><Link href={'/'}> United States</Link></button>

            </div>
            </div>
    </div>
  )
}

export default Footer