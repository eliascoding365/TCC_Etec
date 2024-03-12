import Link from "next/link";

import React from 'react'

const NavBar = () => {
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
          className='text-zinc-900  hover:text-zinc-500 transition-colors'
          href={link.href}
          >
          {link.label}
          </Link>
        )}
      </ul>
    </nav>
    )
}

export default NavBar