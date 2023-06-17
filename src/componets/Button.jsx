import React, { Children } from 'react'

function Button({Children}) {
  return (
     <button 
     className='bg-[#f76f01] text-white w-fit px-4 capitalize py-[7px] rounded-sm hover:bg-[#f76f02] font-serif transition-all duration-75 shadow-md shadow-[#f76f]'
     >
         {Children}
     </button>
  )
}

export default Button