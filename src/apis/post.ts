import axios from 'axios';
import { Navigate, useNavigate } from 'react-router';

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
  const navigate = useNavigate();
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
    navigate('/error');
  }
};

export const deletePost = async (id: number) => {
  const navigate = useNavigate();
  try {
    const { data } = await axios.delete(`${baseUrl}/post/${id}`);

    return data;
  } catch (error) {
    console.log(error);
    navigate('/error');
  }
};

export const likePost = async (postId: number, userId: number) => {
  const navigate = useNavigate();
  try {
    const { data } = await axios.put(`${baseUrl}/post/like/${postId}`, {
      userId,
    });

    return data.likeCount;
  } catch (error) {
    console.log(error);
    navigate('/error');
  }
};

export const createPost = async(
  userId: number,
  content: string,
  region: string,
  transportation:string,
  imageFiles:File[]
) => {
  const navigate = useNavigate();
  try {
    const formData = new FormData();

    formData.append('request', new Blob([
      JSON.stringify({
        userId,
        content,
        region,
        transportation,
      }),
    ],
    { type: 'application/json' }));

    if (imageFiles.length) {
      imageFiles.forEach(file => formData.append('img', file));
    }

    const { data: { data } } = await axios.post(
      `${baseUrl}/post`
      , formData
    );

    return data;
  } catch (e) {
    console.error(e);
    navigate('/error');
  }
};

export const getPostApi = async(postId:string) => {
  const navigate = useNavigate();
  try {
    const { data: { data } } = await axios.get(`${baseUrl}/post/${postId}`);
    return data;
  } catch (e) {
    console.error(e);
    navigate('/error');
  }
};

export const editPost = async (postId:string, content:string) => {
  const navigate = useNavigate();
  try {
    const { data: { data } } = await axios.put(`${baseUrl}/post/${postId}`, {
      content,
    });

    return data;
  } catch (e) {
    console.error(e);
    navigate('/error');
  }
};
