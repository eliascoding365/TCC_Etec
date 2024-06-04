'use client'
import Image from 'next/image';
import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { useState} from 'react'
import { ArrowDownIcon } from '@radix-ui/react-icons';
const Component = () => {
    const [isExpand, setIsExpand ] = useState(false)

    const toggleExpand = () => {
        setIsExpand(!isExpand)
    }
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col w-auto h-auto m-8 justify-center '>
                <div className='bg-white p-2 rounded mb-10'>
                    <div className='flex content-around mx-3 mt-5 mb-6'>
                        <div className='mr-3 '><FaUserCircle size={'43px'} /></div>
                        <div>
                            <h1>Sobrenome</h1>
                            <h3>Name</h3>                        
                        </div>
                        <div className='ml-auto flex items-center'><FaPen /></div>
                    </div>
                    <div className='mx-3 mb-6'>
                        <p>Title</p>
                        <Image
                            src="/static/images/cards/temos-vagas.png"
                            width={347}
                            height={287}
                            alt="Picture of the author"
                        />
                        <p>Date published</p>
                    </div>
                    <div className='mx-3 flex flex-col items-center'>
                        <p>Expandir</p>
                        <p></p>
                        <button onClick={toggleExpand}><ArrowDownIcon/></button>
                        <div className='flex flex-col'>
                            {isExpand && (
                                <div className='p-2 mt-2 bg-gray-100 rounded'> Ola</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component