import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram} from "react-icons/fa";
import  bannerImg  from "../../assets/about-pic.png";

const Banner = () => {
    const [text] = useTypewriter({
        words: ["Songwriter.", "Rapper.", "Record Producer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
  return (
    <section className='w-full py-20 flex items-center border-b-[1px] border-b-black'>
        <div className='w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal'>WELCOME TO MY WORLD!</h4>
                <h1 className='text-6xl font-bold text-white'>Hi, I'm{" "}<span className='text-purple-600 capitalize'>Akanimo</span></h1>
                <h2 className='text-4xl font-bold text-white'>a {" "}<span>{text}</span><Cursor
                    cursorBlinking="false" cursorStyle="|" cursorColor='#A020F0' /></h2>
                <p className='text-base font-bold leading-6 tracking-wide'>I grew up listening to hiphop, R&B, Afrobeat and Classic Music 
                and start writing from an early age. I dropped my debut project Grace in 2023 and have been pursuing professional career in Music ever since.</p>
            </div>
            <div>
                <h2 className='text-base uppercase font-light mb-4'>
                    Find me on
                </h2>
                <div className='flex gap-4'>
                    <span className='w-16 h-16 bg-black bg-capacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md hover:bg-capacity-40 hover:-translate-y-1 transition-all hover:text-purple-600 cursor-pointer duration-300'><FaFacebookF/></span>
                    <span className='w-16 h-16 bg-black bg-capacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md hover:bg-capacity-40 hover:-translate-y-1 transition-all hover:text-purple-600 cursor-pointer duration-300'><FaTwitter/></span>
                    <span className='w-16 h-16 bg-black bg-capacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md hover:bg-capacity-40 hover:-translate-y-1 transition-all hover:text-purple-600 cursor-pointer duration-300'><FaInstagram/></span>
                    <span className='w-16 h-16 bg-black bg-capacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md hover:bg-capacity-40 hover:-translate-y-1 transition-all hover:text-purple-600 cursor-pointer duration-300'><FaLinkedinIn/></span>
                </div>
            </div>
        </div>
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
            <img
                className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={bannerImg}
                alt="bannerImg"
            />
            <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-2xl flex justify-center items-center"></div>
        </div>
    </section>
  )
}

export default Banner