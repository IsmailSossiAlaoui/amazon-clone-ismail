import Banner from '@/components/Banner'
import Image from 'next/image'
import Products from '@/components/Products'
import { ProductProps } from './type'

interface Props{
  productData:ProductProps
}




export default function Home({productData}:Props) {
  return (
   <main>
    <div className='max-w-[1920px] mx-auto  '>
      <Banner />
      <div className='relative md:-mt20 lgl:-mt-32 xl:-mt-60 mb-10 z-20'>
      <Products productData ={productData} />
      </div>
    </div>
    
   </main> 
   
  );
}

//SSR for data festing
export const getServerSideProps =async () =>{
  const res = await fetch ("https://fakestoreapiserver.reactbd.com/nextamazon");
  const productData = await res.json();
  return {props: {productData}}
}