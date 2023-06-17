import React from 'react'
import Food from "./assets/undraw_breakfast_psiw.svg"
import scooter from "./assets/undraw_on_the_way_re_swjt.svg"
import img3 from "./assets/undraw_online_groceries_a02y.svg"
import Card from './Card'

function Footer() {
  return (
    <div className='flex md:w-[90%] md:flex-row flex-col mx-auto overflow-x-hidden  px-10 pb-16 pt-[250px] bg-white overflow-hidden place-items-center gap-5'>
        <div className="text md:w-[20%] w-[90%] px-4 py-2  mx-3">
            <h2 className='text-2xl text-slate-700 font-bold font-serif my-2'>Why we are best in our Town</h2>
             <p className='text-sm opacity-70 my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nihil doloremque dolor veniam similique quod inventore, qui nesciunt maiores consequuntur. Molestiae sit qui delectus fugiat tempora modi veniam obcaecati itaque.</p>
              <button 
               className='bg-[#f76f01] text-white w-fit px-4  py-2 rounded-sm hover:bg-[#f76f02] font-serif transition-all duration-75 shadow-md shadow-[#f76f]'
              >Show more</button>
        </div>
        <div className='md:w-[80%] w-full grid grid-cols-1 md:grid-cols-3 gap-10'>
           <Card imgUrl={Food}></Card>
           <Card className="relative top-5" imgUrl={scooter}></Card>
           <Card imgUrl={img3}></Card>
        </div>
    </div>
  )
}

export default Footer