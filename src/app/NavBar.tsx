'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiHouseLine } from "react-icons/pi";
import { PiBooks } from "react-icons/pi";
import { PiSuitcase } from "react-icons/pi";
import { PiCodepenLogo } from "react-icons/pi";

import classnames from "classnames";

import React from 'react'
import AddBtnModal from "./components/AddBtnModal/AddBtnModal";

const NavBar = () => {
  const currentPath = usePathname()
  const links = [
    { label: 'Home'  , href: '/',      icon: <PiHouseLine size={'25px'} />},
    { label: 'Sobre' , href: '/sobre', icon: <PiBooks size={'25px'}/>},
    //{ label: 'Add'   , href: '/',      icon: <PiPlus size={'25px'}/>}
  ]
  return (
    <nav className='flex justify-between bg-gray-100 space-x-8 border-b mb-5 px-32 h-14 items-center'>
      <Link href="/"> <PiCodepenLogo className='text-gray-600'size={'35px'}/> </Link>
      <ul className='flex  space-x-6'>
        {links.map(link => 
          <Link
          key={link.href}
          href={link.href}
          className={classnames({
            'text-blue-700': link.href === currentPath,
            'text-zinc-600': link.href !== currentPath,
            'hover:text-blue-800 transition-colors':  true
          })}
          >
          <div className="flex flex-col justify-center items-center text-xs font-medium">
            {link.icon}
            <span>{link.label}</span>
          </div>
          </Link>
        )}
        <AddBtnModal/>
      </ul>
    </nav>
    )
}

export default NavBar