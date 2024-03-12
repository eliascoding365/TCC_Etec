'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";

import React from 'react'

const NavBar = () => {
  const currentPath = usePathname()
  console.log(currentPath)
  const links = [
    { label: 'Sobre' , href: '/sobre'},
    { label: 'Home' , href: '/'}
  ]
  return (
    <nav className='flex space-x-8 border-b mb-5 px-5 h-14 items-center'>
      <Link href="/"> Logo </Link>
      <ul className='flex space-x-6'>
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
          {link.label}
          </Link>
        )}
      </ul>
    </nav>
    )
}

export default NavBar