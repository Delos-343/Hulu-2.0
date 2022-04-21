import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'

import { BadgeCheckIcon, CollectionIcon, HomeIcon,
         LightningBoltIcon, SearchIcon, UserIcon, PlayIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <header className='flex flex-colsm:flex-row m-5 justify-between
    items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
          <HeaderItem title='HOME' Icon={HomeIcon} />
          <HeaderItem title='TRENDING' Icon={PlayIcon} />
          <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
          <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
          <HeaderItem title='SEARCH' Icon={SearchIcon} />
          <HeaderItem title='ACCOUNT' Icon={UserIcon} />
        </div>
        <Image 
        className='object-contain'
        src='https://i.postimg.cc/T13jh1vV/IDe-Text-White-3rd-Version-copy-2.png'
        width={200}
        height={160}
        />
    </header>
  )
}

export default Header