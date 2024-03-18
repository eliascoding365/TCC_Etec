import React from 'react'
import { useForm } from 'react-hook-form'
import ButtonCreateVaga from './ButtonCreateVaga';
import axios from 'axios';

interface VagaForm {
    name: string,
    description: string
}
const FormVaga = () => {
    const { register, handleSubmit } = useForm<VagaForm>();

    return (
        <form
        className='flex flex-col px-6' method="dialog"
        onSubmit={handleSubmit( async(data) => 
        await axios.post('/api/vaga', data)
        )}>
            <p className="flex items-center  mb-1 text-gray-700 font-semibold">Nome</p>
            <div className='flex items-center '>
                <input className='rounded-md w-full px-4 py-2' type="text" {...register('name')} />
            </div>
            <p className="flex items-center  mb-1 mt-1  text-gray-700 font-semibold">Escreva seus intereses</p>
            <div className='flex items-center '>
                <textarea className='rounded-md w-full h-24 px-4 py-2 resize-none' {...register('description')}  />
            </div>
            <footer className='flex justify-end absolute right-0 bottom-0 mx-6 my-6'>
              <ButtonCreateVaga/>
            </footer>
        </form>
    )
}

export default FormVaga