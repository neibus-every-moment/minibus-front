import axios from 'axios';

import { baseUrl } from './baseUrl';

interface CommentBodyProps {
  postId: number,
  userId: number,
  content: string,
}

export const createComment = async (body: CommentBodyProps) => {
  const {
    postId,
    userId,
    content,
  } = body;

  try {
    const { data: { data } } = await axios.post(`${baseUrl}/comment`, {
      postId,
      userId,
      content,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = async (id: number) => {
  try {
    const { data } = await axios.delete(`${baseUrl}/comment/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
