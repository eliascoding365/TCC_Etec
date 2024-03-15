'use client'
import React, { useEffect, useRef, useState } from 'react'
import { PiPlus } from "react-icons/pi";
import style from './CreaateVagaButton.module.css'


const CreateVagaButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);


  return (
    <div >
      <div>
        <button
          className="btn"
          onClick={openModal}
          onChange={closeModal}
        ><PiPlus size={'25px'} />
        </button>
      </div>
      {isOpen && (
        <div className="
          flex items-center justify-center
          w-full h-full
          bg-gray-900 bg-opacity-50
          backdrop-blur-xs absolute inset-0 z-50 
          
          ">
          <div ref={modalRef} className='
            flex flex-col absolute
            w-96 h-128 pt-12 m-20 overflow-y-auto
            bg-gray-200 rounded-xl shadow-2xl 
            border border-zinc-200
        ' >
            <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
            <h2 className="flex justify-center text-2xl font-bold mb-4">Criar Vaga</h2>
            <form className='flex flex-col' method="dialog">
              <p className="flex items-center pl-14 mb-1 text-gray-700">Escreva seu nome</p>
              <div className='flex items-center pl-14'>
                <input className='rounded-md'type="text" />
              </div>
            </form>

          </div>
        </div>
      )}


    </div>
  )
}

export default CreateVagaButton

function handler(this: Document, ev: MouseEvent) {
  throw new Error('Function not implemented.');
}
