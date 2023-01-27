import React from 'react'
import {movies} from '../utils/requests';
import Image from 'next/image';

function Trending() {
  return (
    <div className='w-screen h-auto bg-[#ecf0f1]'>
        <div className='flex items-center justify-center flex-wrap pt-[4.7rem] lg:pt-0'>
        {movies.map((item) => (             
              <div className='w-auto h-full mx-5 my-5 flex items-center justify-center flex-col' key={item.id}>
                <img className="w-[550px] lg:w-[550px] h-[450px] lg:h-[540px] inline-block p-2 object-contain" src={item.movie} alt='NO IMAGE AVAILABLE'/> 

                
                <div className='w-[400px] h-[500px] lg:h-[550px] bg-black/75 absolute opacity-0 hover:opacity-100 duration-300 flex items-center justify-center flex-col'>
                  <Image className='object-contain' src='/img/logo.png' width={200} height={100} />
                  <h2 className='text-white hover:text-[#3498db] text-[1.5rem] cursor-pointer'>Watch This Movie</h2>
                </div>
              </div>
            ))}             
        </div>
    </div>
  )
}

export default Trending