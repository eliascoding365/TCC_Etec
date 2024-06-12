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
    author: string,
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
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Add a comment"
          
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
