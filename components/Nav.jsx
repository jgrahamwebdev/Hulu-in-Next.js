import { useRouter } from 'next/router'
import React from 'react'
import requests from '../utils/requests'

function Nav() {

const router = useRouter();

  return (
    <nav className="relative">
        <div className="flex px-10 sm:px-20 text-xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide mb-[2rem]">
            {Object.entries(requests).map(([key, { title, url }]) => (
                <h2 
                key={key} 
                onClick={() => router.push(`${url}`)} className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-[#3498db] active:text-gray-400">{title}</h2>
            ))}
        </div>
    </nav>
  )
}

export default Nav