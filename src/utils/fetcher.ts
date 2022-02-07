import axios from 'axios';

export const fetcher = (url: string) => {
  return axios.get(url)
    .then((res) => res.data.data)
    .catch((e) => console.error(e));
};

export const fetcherWithParams = (url: string, params: any) => {
  return axios.get(url, {
    params: { ...params },
  })
    .then((res) => res.data.data)
    .catch((e) => console.error(e));
};
