'use client'
import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiHouseLine } from "react-icons/pi";
import { PiBooks } from "react-icons/pi";
import { PiSuitcase } from "react-icons/pi";
import { PiCodepenLogo } from "react-icons/pi";
import ButtonOpenModalCreateVaga from "./components/ButtonOpenModalCreateVaga/ButtonOpenModalCreateVaga";
import classnames from "classnames";



const NavBar = () => {
  const currentPath = usePathname()
  const links = [
    { label: 'Home'  , href: '/',      icon: <PiHouseLine size={'25px'} />},
    { label: 'Sobre' , href: '/sobre', icon: <PiBooks size={'25px'}/>},
    //{ label: 'Add'   , href: '/',      icon: <PiPlus size={'25px'}/>}
  ]
  return (
    <nav className='flex justify-between bg-blue-600 space-x-8 border-b px-32 h-14 items-center'>
      <Link href="/"> <PiCodepenLogo className='text-white'size={'35px'}/> </Link>
      <ul className='flex  space-x-6'>
        {links.map(link => 
          <Link
          key={link.href}
          href={link.href}
          className={classnames({
            'text-white': link.href === currentPath,
            'text-white opacity-60 ': link.href !== currentPath,
            'hover:opacity-100 text-white transition-opacity':  true
          })}
          >
          <div className="flex flex-col justify-center items-center text-xs font-medium">
            {link.icon}
            <span>{link.label}</span>
          </div>
          </Link>
        )}
        <ButtonOpenModalCreateVaga />
      </ul>
    </nav>
    )
}

export default NavBar