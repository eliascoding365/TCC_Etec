'use client'
import React, { useState } from 'react'
import { PiPlus } from "react-icons/pi";



const CreateVagaButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleModalClick = (event: { stopPropagation: () => void; }) => {
    event.stopPropagation();
  };
  return (
    <div >
      <button
      className="btn"
      onClick={openModal}
      
      ><PiPlus size={'25px'}/>
      </button>
      {isOpen && (
      <div className='flex justify-center items-center fixed top-1/2 left-1/2 w-max'>
        <div className=" bg-slate-400 w-96 h-32 modal-overlay" onClick={closeModal}>
          <div className="modal">
            <div className="modal-box bg-slate-600" onClick={handleModalClick}>
              <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
              <div className="flex absolute content-center bg-zinc-500 modal-action">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <p>teste</p>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
      )}
      
      
    </div>
  )
}

export default CreateVagaButton