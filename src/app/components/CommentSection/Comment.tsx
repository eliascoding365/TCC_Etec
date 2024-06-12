'use client'
import React, { useState, useEffect } from 'react';
import prisma from '../../../../prisma/client';

interface CommentProps {
  comment: {
    authorId: number;
    content: string;
    createdAt: string; 
  };
}

const Comment = ({ comment }: CommentProps) => {
  const [userName, setUserName] = useState<string | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await prisma.user.findUnique({
          where: { id: comment.authorId }
        });
        setUserName(user?.name || 'Unknown');
      } catch (error) {
        console.error('Error fetching user:', error);
        setUserName('User');
      }
    };

    fetchUser();
  }, [comment.authorId]);

  return (
    <div>
      <small>by {userName} at {new Date(comment.createdAt).toLocaleString()}</small>
      <p>{comment.content}</p>
    </div>
  );
};

export default Comment;
