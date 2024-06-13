'use client'
import React from 'react';

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
    <div>
      <small>{comment.author?.name || 'Unknown'} em {new Date(comment.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
      </small>
      <p>{comment.content}</p>
    </div>
  );
};

export default Comment;
