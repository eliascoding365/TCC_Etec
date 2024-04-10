'use client'
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiHouseLine, PiPlus } from "react-icons/pi";
import { PiUserCircle } from "react-icons/pi";
import { PiBooks } from "react-icons/pi";
import { PiCodepenLogo } from "react-icons/pi";
import ButtonOpenModalCreateVaga from "./components/ButtonOpenModalCreateVaga/ButtonOpenModalCreateVaga";
import classnames from "classnames";
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';


const NavBar = () => {
  const currentPath = usePathname();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const sessionData = await getSession(); // Fetch session from the server
        setSession(sessionData);
        console.log(sessionData)
      } catch (error) {
        console.error('Error fetching server session:', error);
      }
    };

    fetchSession();
  }, []);

  const links = [
    { label: 'Home', href: '/', icon: <PiHouseLine size={'25px'} />, showWhenLoggedIn: true, showWhenLoggedOut: true },
    { label: 'About', href: '/sobre', icon: <PiBooks size={'25px'} />, showWhenLoggedIn: true, showWhenLoggedOut: true },
    { label: 'Account', href: '/user', icon: <PiUserCircle size={'25px'} />, showWhenLoggedIn: true , showWhenLoggedOut: true },
    { label: '', href: '', icon: <ButtonOpenModalCreateVaga />, showIcon: currentPath === '/', showWhenLoggedIn: true }
  ];

  return (
    <nav className='flex justify-between bg-blue-600 space-x-8 border-b px-32 h-14 items-center'>
      <Link href="/"> <PiCodepenLogo className='text-white' size={'35px'} /> </Link>
      <ul className='flex  space-x-6'>
        {links.map(link => {
          // Check if link should be shown based on authentication status and current path
          if (
            ((session && link.showWhenLoggedIn) || (!session && link.showWhenLoggedOut)) ||
            (link.href === '/' && link.showIcon)
          ) {
            return (
              <Link
                key={link.href}
                href={link.href}
                className={classnames({
                  'text-white': link.href === currentPath,
                  'text-white opacity-60 ': link.href !== currentPath,
                  'hover:opacity-100 text-white transition-opacity': true
                })}
              >
                <div className="flex flex-col justify-center items-center text-xs font-medium">
                  {link.icon}
                  <span>{link.label}</span>
                </div>
              </Link>
            );
          }
          return null; // Return null for links that shouldn't be shown
        })}
        
      </ul>
    </nav>
  );
};

export default NavBar;
