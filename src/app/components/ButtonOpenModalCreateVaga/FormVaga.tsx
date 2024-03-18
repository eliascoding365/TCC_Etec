import React from 'react'

const FormVaga = () => {
    return (
        <form className='flex flex-col px-6' method="dialog">
            <p className="flex items-center  mb-1 text-gray-700 font-semibold">Nome</p>
            <div className='flex items-center '>
                <input className='rounded-md w-full px-4 py-2' type="text" />
            </div>
            <p className="flex items-center  mb-1 mt-1  text-gray-700 font-semibold">Sobrenome</p>
            <div className='flex items-center '>
                <input className='rounded-md w-full px-4 py-2' type="text" />
            </div>
            <p className="flex items-center  mb-1 mt-1  text-gray-700 font-semibold">Escreva seus intereses</p>
            <div className='flex items-center '>
                <textarea className='rounded-md w-full h-24 px-4 py-2 resize-none'   />
            </div>
        </form>
    )
}

export default FormVaga