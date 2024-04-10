'use client'
import React, { useEffect, useRef, useState } from 'react';
import { PiPlus } from "react-icons/pi";
import FormVaga from './FormVaga';
import { useRouter } from 'next/router';

const ButtonOpenModalCreateVaga = () => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: { target: any; }) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                closeModal();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.classList.add("overflow-y-hidden");
        } else {
            document.body.classList.remove("overflow-y-hidden");
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div>
            <div className="
            flex flex-col justify-center items-center
            text-xs font-medium
            text-white opacity-60 hover:text-white hover:opacity-100 transition-opacity">
                <button
                    className="btn"
                    onClick={openModal}
                    onChange={closeModal}
                >
                    <PiPlus size={'25px'} />
                    <span>Add</span>
                </button>
            </div>
            {isOpen && (
                <div className="
                  flex items-center justify-center
                  w-full h-full
                  bg-gray-900 bg-opacity-50
                  backdrop-blur-xs fixed inset-0 z-50 

                  ">
                    <div ref={modalRef} className='
                    flex flex-col absolute
                    w-96 h-2/3 pt-12 m-20 overflow-y-auto
                    bg-gray-200 rounded-xl shadow-2xl 
                    border border-zinc-200
                ' >
                        <button type="button" className="btn btn-sm btn-circle btn-ghost flex absolute mx-6 my-4 right-0 top-0" onClick={closeModal}>✕</button>
                        <h2 className="flex justify-center text-2xl font-bold mb-4">Criar Vaga</h2>
                        <FormVaga closeModal={closeModal} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ButtonOpenModalCreateVaga;
