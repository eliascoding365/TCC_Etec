import React from 'react';
import { useForm } from 'react-hook-form';
import ButtonCreateVaga from './ButtonCreateVaga';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface VagaForm {
    name: string;
    description: string;
}

const FormVaga = ({ closeModal }: { closeModal: () => void }) => {
    const { register, handleSubmit } = useForm<VagaForm>();
    const router = useRouter();
    const onSubmit = async (data: VagaForm) => {
        await axios.post('/api/vaga', data);
        closeModal(); 
        router.refresh();

    };

    return (
        <form className='flex flex-col px-6' method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <p className="flex items-center  mb-1 text-gray-700 font-semibold">Título da vaga</p>
            <div className='flex items-center '>
                <input className='rounded-md w-full px-4 py-2' type="text" {...register('name')} />
            </div>
            <p className="flex items-center  mb-1 mt-1  text-gray-700 font-semibold">O que você precisa no seu serviço?</p>
            <div className='flex items-center '>
                <textarea className='rounded-md w-full h-24 px-4 py-2 resize-none' {...register('description')} />
            </div>
            <footer className='flex justify-end absolute right-0 bottom-0 mx-6 my-6'>
                <ButtonCreateVaga />
            </footer>
        </form>
    );
};

export default FormVaga;
