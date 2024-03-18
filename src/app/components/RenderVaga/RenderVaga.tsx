import React from 'react'
import prisma from '../../../../prisma/client'
const RenderVaga = async () => {
  const vaga = await prisma.vaga.findMany()
  return (
    <div className='flex flex-wrap justify-center w-1/2  h-screen rounded-md my-8'>
      {vaga.map(vaga => (

        <div key={vaga.id} className='
        flex flex-col h-96 w-96 m-2 py-6 items-center
        rounded-md bg-[#f3f4f6] border border-1/2 border-gray-500
        
        '>
        <header>
          <p>Title:  </p>
          <p>Name: {vaga.name}</p>
        </header>
        <section className='flex flex-col'>
          <span>Decription:</span>
          <textarea readOnly
          className='
          p-1 resize-none cursor-default rounded-md
          text-sm
          '
          defaultValue={vaga.description}></textarea>
          <p className='text-xs'>created: {vaga.createdAt.toDateString()}</p>
        </section>
      </div>
        ))}
    </div>
  )
}

export default RenderVaga