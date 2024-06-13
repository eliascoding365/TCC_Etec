'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './Comment';

interface CommentSectionProps {
  postId: number;
  userId: number;
}

interface Comment {
  id: number;
  content: string;
  authorId: number;
  author: {
    name: string;
  };
  createdAt: string;
}

const CommentSection = ({ postId, userId }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get(`/api/comments?postId=${postId}`)
      .then(response => setComments(response.data))
      .catch(error => console.error(error));
  }, [postId]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (content.trim() === '') return;

    axios.post('/api/comments', { post_id: postId, user_id: userId, content })
      .then(response => {
        setComments([...comments, response.data]);
        setContent('');
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <div >
        <div>
          <h3>Comentários:</h3>
        </div>
        <div className='flex items-center w-auto ml-0 h-auto'>
          <form onSubmit={handleSubmit} className='flex flex-col w-full'>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Escreva um comentário"
              className='p-1 resize-none flex-grow rounded-sm bg-zinc-100 '
            />
            <div className='my-3 flex justify-end'>
              <button type="submit" className='text-sm p-1 bg-blue-600 hover:opacity-85 text-white rounded-sm'>Comentar</button>
            </div>
          </form>
        </div>
      </div>

      <div>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
