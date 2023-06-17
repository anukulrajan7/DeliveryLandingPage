import React from 'react'

function Card({imgUrl}) {
  return (
    <div className='w-[80%] flex flex-col gap-5 justify-center py-7 hove px-7 mx-3  bg-[#525fe1] shadow-purple-700 text-white  first-letter:capitalize shadow-xl rounded-md hover:translate-y-1 transition-all duration-150 hover:translate-x-1 '> 
       <div className="img w-full px-2 py-3">
        <img src={imgUrl} alt="" />
       </div>
       <div className="text text-xl font-semibold mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur 
          </p>
       </div>
    </div>
  )
}

export default Card