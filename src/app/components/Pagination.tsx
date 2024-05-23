import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons'
import React from 'react'
import { Button } from '@radix-ui/themes';

interface Props {
  itemCount: number,
  pageSize: number,
  currentPage: number
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const pageCount = Math.ceil(itemCount / pageSize)
  if (pageCount <= 1) return null
  return (
    <div className='flex items-center gap-2'>
      <p>Página: {currentPage} de {pageCount}</p>
      <Button color='gray' variant='soft' disabled={currentPage === 1}>
        <ChevronLeftIcon />
      </Button>
      <Button color='gray' variant='soft' disabled={currentPage === 1}>
        <DoubleArrowLeftIcon />
      </Button>
      <Button color='gray' variant='soft' disabled={currentPage === pageCount}>
        <ChevronRightIcon />
      </Button>
      <Button color='gray' variant='soft' disabled={currentPage === pageCount}>
        <DoubleArrowRightIcon />
      </Button>
    </div>
  )
}

export default Pagination