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
      <button onClick={toggleExpand} className='self-end'>
        <div className='flex items-center '>
          <p className='text-sm font-light'>expandir</p>
          <ArrowDownIcon />
        </div>
      </button>

      {isExpand && (
        <div className='flex-grow flex flex-col justify-end p-1 mt-2'>
          {children}
        </div>
      )}
    </div>
  )
}

export default ComponentExpandMore
