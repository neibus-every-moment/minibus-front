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

    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function signOut() {
  try {
    const { data } = await axios.post(`${baseUrl}/auth/logoutUser`);

    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function getMyPosts() {
  try {
    const { data } = await axios.get(`${baseUrl}/auth/my-posts`);

    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function getMyComments() {
  try {
    const { data } = await axios.get(`${baseUrl}/auth/my-comments`);

    return data;
  } catch (e) {
    console.error(e);
  }
}
