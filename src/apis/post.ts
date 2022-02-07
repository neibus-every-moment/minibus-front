import axios from 'axios';

const baseUrl = 'http://3.37.182.59:8080/api';

export const getPosts = async (params: {
  start: number,
  size: number,
  sorting: string,
  region?: string,
  transportation?: string
}) => {
  const {
    start,
    size,
    sorting = 'createdAt',
    region,
    transportation,
  } = params;

  try {
    const { data } = await axios.get(`${baseUrl}/posts`, {
      params: {
        start,
        size,
        sorting,
        region,
        transportation,
      },
    });
    console.log(data.data);

    return data.data;
  } catch (error) {
    console.log(error);
  }
};
