'use client'
import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons'
import React from 'react'
import { Button } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

interface Props {
  itemCount: number,
  pageSize: number,
  currentPage: number
}

const Pagination = ({
  itemCount,
  pageSize,
  currentPage 
  }: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams()
  const pageCount = Math.ceil(itemCount / pageSize)
  if (pageCount <= 1) return null

  const changePage = (page: number) =>{

    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString())
    router.push('?' + params.toString())

  }

  return (
    <div className='flex items-center gap-2 my-12'>
      <p>Página: {currentPage} de {pageCount}</p>
      <Button 
      color='gray' 
      variant='soft' 
      disabled={currentPage === 1}
      onClick={()=> changePage(1)}
      >
        <DoubleArrowLeftIcon />
      </Button>
      <Button 
      color='gray' 
      variant='soft' 
      disabled={currentPage === 1}
      onClick={()=> changePage(currentPage - 1)}
      >
        <ChevronLeftIcon />
      </Button>
      <Button 
      color='gray' 
      variant='soft' 
      disabled={currentPage === pageCount}
      onClick={()=> changePage(currentPage + 1)}
      
      >
        <ChevronRightIcon />
      </Button>
      <Button 
      color='gray' 
      variant='soft' 
      disabled={currentPage === pageCount}
      onClick={()=> changePage(pageCount)}
      >
        <DoubleArrowRightIcon />
      </Button>
    </div>
  )
}

export default Pagination