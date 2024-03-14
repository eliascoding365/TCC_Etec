'use client'
import React, { useState } from 'react'
import { PiPlus } from "react-icons/pi";
import style from './CreaateVagaButton.module.css'


const CreateVagaButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


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
        <div className='
        className="grid grid-cols-3 grid-rows-3 w-96 h-1/2
        fixed top-1/3 left-1/2 transform -translate-x-1/2 
        -translate-y-1/2 p-20 bg-gray-400 border-2 mt-5 
        rounded-lg shadow-lg border-indigo-400
        
        ' >
          <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
          <form className='flex' method="dialog">
            <input type="text" />
            {/* if there is a button in form, it will close the modal */}
            <p>teste</p>
          </form>
        </div>
      )}


    </div>
  )
}

export default CreateVagaButton