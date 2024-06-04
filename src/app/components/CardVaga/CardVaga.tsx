import Image from 'next/image';
import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import prisma from '../../../../prisma/client';
import Pagination from '../Pagination';
import ComponentExpandMore from './ComponentExpandMore';

interface Props {
  searchParams: {
    page: string
  }
}

export default async function CardVaga({ searchParams }: Props) {
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 4

  const vagas = await prisma.vaga.findMany({
    include: {
      createdBy: {
        select: {
          name: true // Select the name field of the createdBy relation
        }
      }
    },
    skip: (page - 1) * pageSize,
    take: pageSize
  });

  const totalItems = await prisma.vaga.count()
  return (
    <div className='flex flex-col items-center justify-center mb-4'>
      <div className='flex flex-col w-auto h-auto m-8 justify-center' >
        {vagas.map((vaga) => (
          <div key={vaga.id} className='bg-white p-2 rounded mb-14'>
            <div className='flex content-around mx-3 mt-5 mb-6'>
              <div className='mr-3 '><FaUserCircle size={'43px'} /></div>
              <div>
                <h1>{vaga.createdBy.name}</h1>
                <h1>id:{vaga.createdById}</h1>
              </div>
              <div className='ml-auto flex items-center'><FaPen /></div>
            </div>
            <div className='mx-3 mb-6'>
              <p>{vaga.name}</p>
              <Image
                src="/static/images/cards/temos-vagas.png"
                width={347}
                height={287}
                alt="Picture of the author"
              />
              <p>Data published</p>
              <p>{vaga.createdAt.toLocaleDateString()}</p>
            </div>
            <div className='mx-3 flex flex-col items-center'>
              <p>Expandir</p>

            </div>
            <div className='mx-3 max-w-60 flex flex-col'>
              {vaga.description}

            </div>
          </div>
        ))}
      </div>
      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={totalItems}
      />
    </div>
  );
}
