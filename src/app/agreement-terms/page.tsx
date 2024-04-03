'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { PiArrowCircleLeftBold } from "react-icons/pi";


const AgreementTermsPage = () => {
  const router = useRouter()
  return (
    <div>
      <div className='h-screen'>
            <div className='flex justify-start mx-12 my-8'>
              <button
                className=' flex items-center rounded p-1 bg-gray-700 text-gray-200 shadow-lg'
                type="button"
                onClick=
                {
                  () => router.back()
                }>
                <PiArrowCircleLeftBold size={'20px'} />
                Voltar
              </button>
            </div>
        <main className='flex flex-col my-14 justify-center items-center'>
          <div>

            <ul>
              <li>Eu declaro ter mais de 14 anos para o uso desse site</li>
            </ul>
          </div>
        </main>
      </div>
      <footer className="bg-gray-800 py-6 absolute bottom-0 w-full">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400">© 2024 VagaNet. All rights reserved.</p>
            </div>
            <div>
              <a href="#" className="text-gray-400 transition-colors hover:text-gray-300 mr-4">Privacy Policy</a>
              <a href="#" className="text-gray-400 transition-colors hover:text-gray-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>

  )
}

export default AgreementTermsPage