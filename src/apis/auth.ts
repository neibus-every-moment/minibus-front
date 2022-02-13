import axios from 'axios';
import { useNavigate } from 'react-router';

import { baseUrl } from './baseUrl';

export async function saveAuth() {
  const navigate = useNavigate();
  try {
    const resToken = await axios.post(`${baseUrl}/auth/loginadad`, {
      email: 'test@test.com',
      nickname: 'test계정입니다',
      profileImage: 'test',
    });

    const ACCESS_TOKEN = resToken.data.token;
    localStorage.setItem('Auth', ACCESS_TOKEN);

  } catch (e) {
    console.error(e);
    navigate('error');
  }
}

export async function getUserInfo(userId: number) {
  const navigate = useNavigate();
  try {
    const { data } = await axios.get(`${baseUrl}/auth/login/${userId}`);

    return data;
  } catch (e) {
    console.error(e);
    return navigate('/error');
  }
}

export async function signOut() {
  const navigate = useNavigate();
  try {
    const { data } = await axios.post(`${baseUrl}/auth/logoutUser`);

    return data;
  } catch (e) {
    console.error(e);
    return navigate('/error');
  }
}

export async function getMyPosts(id: number) {
  const navigate = useNavigate();
  try {
    const { data: { data } }
    = await axios.get(`${baseUrl}/auth/my-posts/${id}`);

    return data;
  } catch (e) {
    console.error(e);
    return navigate('/error');
  }
}

export async function getMyComments(id: number) {
  const navigate = useNavigate();
  try {
    const { data: { data } }
    = await axios.get(`${baseUrl}/auth/my-comments/${id}`);

    return data;
  } catch (e) {
    console.error(e);
    return navigate('/error');
  }
}

export async function editProfileImage(userId: number, avatar: File) {
  const navigate = useNavigate();
  try {
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
    return navigate('/error');
  }
}
