import Image from 'next/image';
import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import prisma from '../../../../prisma/client';
import Pagination from '../Pagination';
import ComponentExpandMore from './ComponentExpandMore';
import { getServerSession } from 'next-auth';
import BadgeComponent from './Badge';
import Dropdown from './Dropdown';
import CommentSection from '../CommentSection/CommentSection';

interface Props {
  searchParams: {
    page: string;
  }
}

export default async function CardVaga({ searchParams }: Props) {
  const session = await getServerSession();
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 4;

  const user = session ? await prisma.user.findUnique({
    where: {
      email: session.user.email
    }
  }) : null;

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

  const totalItems = await prisma.vaga.count();

  return (
    <div className='flex flex-col items-center justify-center mb-4'>
      <div className='flex flex-col w-auto h-auto max-w-md m-8 justify-center'>
        {vagas.map((vaga) => (
          <div key={vaga.id} className='bg-white border-gray-200 shadow-sm border p-2 rounded mb-14'>
            <div className='flex content-around mx-5 mt-4 mb-8'>
              <div className='mr-3'><FaUserCircle size={'43px'} /></div>
              <div>
                <div className='flex items-center gap-2'>
                  <h1 className='font-semibold'>{vaga.createdBy.name}</h1>
                  {session && user?.id === vaga.createdById && (
                      <BadgeComponent text='Você'/>
                  )}
                </div>
                <p className='text-xs font-light'>id:{vaga.createdById}</p>
              </div>
              <div className='ml-auto flex items-center'>
                {session && user?.id === vaga.createdById && (
                      <Dropdown />
                )}
              </div>
            </div>
            <div className='mx-5 mb-6'>
              <p className='text-md text-gray-800'>{vaga.name}</p>
              <Image
                src="/static/images/cards/temos-vagas.png"
                width="400"
                height="225"
                alt="Picture of the author"
              />
              <div className='flex justify-end mb-4'>
                <p className='text-xs font-light'>
                  <span className='mr-1'>Data da publicação</span>
                  {new Date(vaga.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                </p>
              </div>
              <div>
                <ComponentExpandMore>
                  {vaga.description}
                </ComponentExpandMore>
                  {user?.id && (
                    <CommentSection postId={vaga.id} userId={user.id} />
                  )}
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
