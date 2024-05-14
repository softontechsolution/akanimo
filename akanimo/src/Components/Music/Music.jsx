import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Mymusic from '../Mymusic/Mymusic'
import Concerts from '../Concerts/Concerts'

const Music = () => {
  return (
    <div className='w-full h-auto bg-slate-900 text-slate-100'>
      <div className='max-w-screen-2xl mx-auto px-16'>
        <Navbar/>
        <Banner />
        <Mymusic />
        <Concerts />
      </div>
    </div>
  )
}

export default Music