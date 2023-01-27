import React from 'react'
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from "@heroicons/react/outline";
import Image from 'next/image';
import HeaderItem from './HeaderItem';
import Link from 'next/link';

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title='HOME' Icon={HomeIcon}/>
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
        <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
        <HeaderItem title='SEARCH' Icon={SearchIcon}/>
        <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
      </div>
      <Link href="/"><Image className='object-contain cursor-pointer' src='/img/logo.png' width={200} height={100} /></Link>
    </header>
  )
}

export default Header