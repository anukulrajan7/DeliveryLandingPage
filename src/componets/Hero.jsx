import React from 'react'
import delivery  from "./assets/undraw_deliveries_2r4y.svg"
import drone from "./assets/undraw_drone_surveillance_kjjg.svg"
import bycycle from "./assets/undraw_ride_a_bicycle_re_6tjy.svg"
import Button from './Button'
function Hero() {
  return (
    <div className='flex md:w-[90%] w-full md:flex-row  flex-col mx-auto gap-4 my-3 mb-52 md:my-7 '>
       <div className="text flex h-fit py-10 my-auto flex-col gap-6 md:gap-10 flex-wrap w-[80%] mx-auto md:w-[40%]">
         <h1 className='md:text-5xl text-4xl font-semibold md:leading-relaxed  text-white  first-letter:capitalize  font-serif'>Get your food Delivery at your Doorstep</h1>
         <p className='text-white font-serif opacity-80'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nulla delectus esse ab! Earum quas ad dolore odio doloribus pariatur?</p>
          <div className='flex  gap-6'>
             <Button Children={"order now"}/>
              <button className='text-white bg-transparent border-slate-700 border-[2px]  px-4 py-1'> Track your order</button>
          </div>
       </div>
       <div className='relative md:w-[60%] w-[90%] mx-auto '>
            <img src={delivery} alt=""
            className='absolute md:top-[10%] md:right-0 md:w-[500px] w-[200px] top-3 right-8 z-50'/>
            <img src={drone} alt="" className='absolute md:top-10 md:w-[200px] w-[100px] md:bottom-0 md:left-0 bottom-[-50px] left-4' />
            <img src={bycycle} alt="" className='absolute md:top-[330px] top-[200px] md:right-[60%] right-[0px] md:w-[500px] w-[300px]' />
      </div>
    </div>
  )
}

export default Hero