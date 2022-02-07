import axios from 'axios';

const baseUrl = 'http://3.37.182.59:8080/api';

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
