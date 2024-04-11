import React, { PropsWithChildren } from 'react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'

const ErrorMessage = ({ children }: PropsWithChildren) => {
    if (!children) return null
    
    return (
        <div className="flex items-center bg-red-100 bg-opacity-70 p-2 border rounded-md border-red-400">
            <HiOutlineExclamationCircle size={'11px'} color="red" />
            <span className='ml-2 text-red-400 text-xs'>
                {children}
            </span>
        </div>
    )
}

export default ErrorMessage