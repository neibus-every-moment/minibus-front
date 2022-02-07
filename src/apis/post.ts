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
    const { data } = await axios.get(`${baseUrl}/posts`, {
      params: {
        start,
        size,
        sorting,
        // TODO: back에서 아직 이름을 변경하지 않았다.
        region: regions?.join(','),
        transportation: transportations?.join(','),
      },
    });
    console.log(data.data);

    return data.data;
  } catch (error) {
    console.log(error);
  }
};
