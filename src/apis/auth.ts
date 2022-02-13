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
    location.href = 'error';
  }
}

export async function getUserInfo(userId: number) {
  try {
    const { data } = await axios.get(`${baseUrl}/auth/login/${userId}`);

    return data;
  } catch (e) {
    console.error(e);
    location.href = 'error';
  }
}

export async function signOut() {
  try {
    const { data } = await axios.post(`${baseUrl}/auth/logoutUser`);

    return data;
  } catch (e) {
    console.error(e);
    location.href = 'error';
  }
}

export async function getMyPosts(id: number) {
  try {
    const { data: { data } }
    = await axios.get(`${baseUrl}/auth/my-posts/${id}`);

    return data;
  } catch (e) {
    console.error(e);
    location.href = 'error';
  }
}

export async function getMyComments(id: number) {
  try {
    const { data: { data } }
    = await axios.get(`${baseUrl}/auth/my-comments/${id}`);

    return data;
  } catch (e) {
    console.error(e);
    location.href = 'error';
  }
}

export async function editProfileImage(userId: number, avatar: File) {
  try {
    console.log(avatar);
    const formData = new FormData();

    formData.append('request', new Blob([
      JSON.stringify({
        avatar,
      }),
    ],
    { type: 'application/json' }));

    formData.append('img', avatar);

    const { data: { data } } = await axios.put(
      `${baseUrl}/auth/user/${userId}`,
      formData,
    );

    return data;

  } catch (e) {
    console.log(e);
  }
}
