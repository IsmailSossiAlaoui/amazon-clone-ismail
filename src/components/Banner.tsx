import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import sliderImg_1 from "../../public/images/sliderImg_1.jpg"
import sliderImg_2 from "../../public/images/sliderImg_2.jpg"
import sliderImg_3 from "../../public/images/sliderImg_3.jpg"
import sliderImg_4 from "../../public/images/sliderImg_4.jpg"

import Image from 'next/image';
const Banner = () => {
  return (
    <div className='relative mx-auto'>  
        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} interval={3000}   showThumbs={false} className='w-full'>
    <div>
        <Image src={sliderImg_1} priority alt='slider image'/>
    </div>
    <div>
        <Image  src={sliderImg_2} alt='slider image'/>
    </div>
    <div>
        <Image src={sliderImg_3} alt='slider image'/>
    </div>
    <div>
        <Image src={sliderImg_4} alt='slider image'/>
    </div>
</Carousel>
<div className='w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20 '></div>
</div>
  )
}

export default Banner