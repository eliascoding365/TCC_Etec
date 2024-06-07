'use client'
import React, { useState } from 'react'
import { ArrowDownIcon } from '@radix-ui/react-icons';

interface ComponentExpandMoreProps {
  children: React.ReactNode;
}

const ComponentExpandMore: React.FC<ComponentExpandMoreProps> = ({ children }) => {
  const [isExpand, setIsExpand] = useState(false)

  const toggleExpand = () => {
    setIsExpand(!isExpand)
  }

  return (
    <div className='flex flex-col h-full'>
      <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isExpand ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        {/* 
        Smooth animation
        <div className='flex-grow flex flex-col justify-end p-1 mt-2'>
        <span className={`text-sm text-gray-600 dark:text-gray-400 ${isExpand ? 'line-clamp-none' : 'line-clamp-1'}`}>{children}</span>
        </div> */}
      </div>
      <span className={`text-sm text-gray-600 dark:text-gray-400 ${isExpand ? 'line-clamp-none' : 'line-clamp-1'}`}>Fc{children}</span>
      <button
        onClick={toggleExpand}
        className='self-end mt-2 flex items-center'
        aria-expanded={isExpand}
      >
        <p className='text-sm font-light'>{isExpand ? 'Recolher' : 'Expandir'}</p>
        <ArrowDownIcon
          className={`transform transition-transform ease-in-out duration-300 ${isExpand ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      
    </div>
  )
}

export default ComponentExpandMore
