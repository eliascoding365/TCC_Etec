import React from 'react'

const AgreementTermsPage = () => {
  return (
    <div>
      <div className='h-screen'>
        <main className='flex flex-col my-14 justify-center items-center'>
          <ul>
            <li>Eu declaro ter mais de 14 anos para o uso desse site</li>
          </ul>
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