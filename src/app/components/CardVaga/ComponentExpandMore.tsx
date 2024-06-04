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
    <div>
      <button onClick={toggleExpand}><ArrowDownIcon /></button>

      {isExpand && (
        <div className='p-2 mt-2 bg-gray-100 rounded'>
          {children}
        </div>
      )}</div>
  )
}

export default ComponentExpandMore