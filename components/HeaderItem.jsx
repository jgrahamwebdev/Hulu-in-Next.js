import React from 'react'

function HeaderItem({ Icon, title }) {
  return (
    <div className="w-12 sm:w-20 flex flex-col items-center cursor-pointer group hover:text-[#3498db] active:text-gray-400">
        <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
        <p className="opacity-0 group-hover:opacity-100 tracking-widest duration-150">{title}</p>
    </div>
  )
}

export default HeaderItem