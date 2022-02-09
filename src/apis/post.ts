import axios from 'axios';

import { baseUrl } from './baseUrl';

export const getPosts = async (params: {
  start: number,
  size: number,
  sorting: string,
  regions?: string[],
  transportations?: string[]
}) => {
  const {
    start,
    size,
    sorting = 'createdAt',
    regions,
    transportations,
  } = params;

  try {
    const { data: { data } } = await axios.get(`${baseUrl}/posts`, {
      params: {
        start,
        size,
        sorting,
        regions: regions?.join(','),
        transportations: transportations?.join(','),
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id: number) => {
  try {
    const { data } = await axios.delete(`${baseUrl}/post/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const likePost = async (postId: number, userId: number) => {
  try {
    const { data } = await axios.put(`${baseUrl}/post/like/${postId}`, {
      userId,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
