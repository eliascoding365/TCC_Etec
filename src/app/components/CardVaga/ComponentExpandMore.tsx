'use client'
import React, { useState, useRef, useEffect } from 'react';
import { ArrowDownIcon } from '@radix-ui/react-icons';

interface ComponentExpandMoreProps {
  children: React.ReactNode;
}

const ComponentExpandMore: React.FC<ComponentExpandMoreProps> = ({ children }) => {
  const [isExpand, setIsExpand] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const contentRef = useRef<HTMLSpanElement>(null);
  const measurementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (contentRef.current && measurementRef.current) {
      const contentHeight = contentRef.current.offsetHeight;
      const measurementHeight = measurementRef.current.offsetHeight;

      setIsTruncated(contentHeight < measurementHeight);
    }
  }, [children]);

  const toggleExpand = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div className='flex flex-col h-full'>
      <span
        ref={measurementRef}
        className='text-sm text-gray-600 dark:text-gray-400 line-clamp-none absolute opacity-0 pointer-events-none'
        aria-hidden="true"
      >
        {children}
      </span>
      <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isExpand ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
      </div>
      <span ref={contentRef} className={`text-sm text-gray-600 dark:text-gray-400 ${isExpand ? 'line-clamp-none' : 'line-clamp-2'}`}>
        {children}
      </span>
      {isTruncated && (
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
      )}
    </div>
  );
};

export default ComponentExpandMore;
