'use client'
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

interface CommentProps {
  comment: {
    author?: {
      name: string;
    };
    content: string;
    createdAt: string;
  };
}

const Comment = ({ comment }: CommentProps) => {
  return (
    <div className='flex flex-col mb-3'>
      <div className='flex items-center text-center mr-3 mb-2'>
        <div className='mr-2'>
          <FaUserCircle size={'32px'}/>
        </div>
        <span>{comment.author?.name || 'Unknown'} em {new Date(comment.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}&nbsp;
        comentou:</span>
        
      </div>
      <div className='ml-10'>
        
        <p className='text-sm'>{comment.content}</p>
      </div>
    </div>
  );
};

export default Comment;
