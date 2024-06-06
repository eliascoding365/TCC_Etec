import React from 'react'

interface BadgeProps {
  text: string
}

const BadgeComponent = ({text}:BadgeProps) => {
  return (
    <div className='
    inline-flex items-center rounded-full border 
    px-1.5 py-0.5 text-xs font-medium transition-colors 
    focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 
    border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80'>
      <span>{text}</span>
    </div>
  )
}

export default BadgeComponent