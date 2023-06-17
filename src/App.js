import React from 'react'
// import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import Navbar from './componets/Navbar'
import Hero from './componets/Hero'

function App() {
  return (
     <div className='w-[100%] overflow-x-hidden scroll-smooth scroll-none '>
        <header className=' flex flex-col  bg-[#525fe1] py-4  '>
        <Navbar />
        <Hero />
        </header>
        <Footer />
     </div>

  )
}

export default App