import Image from 'next/image';
import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import prisma from '../../../../prisma/client';
import Pagination from '../Pagination';
import ComponentExpandMore from './ComponentExpandMore';
import { getServerSession } from 'next-auth';

interface Props {
  searchParams: {
    page: string
  }
}

export default async function CardVaga({ searchParams }: Props) {
  const session = await getServerSession();
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 4
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user.email
    }

  })
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
      <div className='flex flex-col w-auto h-auto max-w-sm m-8 justify-center' >
        {vagas.map((vaga) => (
          <div key={vaga.id} className='bg-white p-2 rounded mb-14'>
            <div className='flex content-around mx-5 mt-4 mb-8'>
              <div className='mr-3 '><FaUserCircle size={'43px'} /></div>
              <div>
                <h1 >{vaga.createdBy.name}</h1>
                <p className='text-xs font-light'>id:{vaga.createdById}</p>
              </div>
              <div className='ml-auto flex items-center'>
                { user?.id  === vaga.createdById &&
                  <>
                    <button>
                      <FaPen />
                    </button>
                  </>
                }
              </div>
            </div>
            <div className='mx-5 mb-6'>
              <p className='text-md'>{vaga.name}</p>
              <Image
                src="/static/images/cards/temos-vagas.png"
                width={328}  //271
                height={328}
                alt="Picture of the author"
              />
              <div className='flex justify-end mb-4'>
                <p className='text-xs font-light '>
                  <span className='mr-1'>Data da publicação</span>
                  {new Date(vaga.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                </p>
              </div>
              <div>
                <ComponentExpandMore>
                  <p className='text-sm font-normal justify-text'>{vaga.description}</p>
                </ComponentExpandMore>
              </div>
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
