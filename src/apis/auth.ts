import axios from 'axios';

import { baseUrl } from './baseUrl';

export async function getUserInfo(userId: number) {
  try {
    const { data } = await axios.get(`${baseUrl}/auth/login/${userId}`);

    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
}
