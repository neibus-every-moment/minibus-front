import axios from 'axios';

import { baseUrl } from './baseUrl';

export async function saveAuth() {
  try {
    const resToken = await axios.post(`${baseUrl}/auth/login`, {
      email: 'test@test.com',
      nickname: 'test계정입니다',
      profileImage: 'test',
    });

    const ACCESS_TOKEN = resToken.data.token;
    localStorage.setItem('Auth', ACCESS_TOKEN);

  } catch (e) {
    console.error(e);
  }
}

export async function getUserInfo(userId: number) {
  try {
    const { data } = await axios.get(`${baseUrl}/auth/login/${userId}`);

    console.log(data);
    console.log(data.token);
    return data;
  } catch (e) {
    console.error(e);
  }
}
