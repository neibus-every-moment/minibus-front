import axios from 'axios';
import React from 'react';
import { Navigate, useNavigate } from 'react-router';

import { baseUrl } from '../apis/baseUrl';

function MyPage() {
  const navigate = useNavigate();

  const handleSignOut = async() => {
    try {
      const res = await axios.post(`${baseUrl}/auth/logoutUser`);

      if (res.data) {
        localStorage.removeItem('Auth');
        navigate('/');
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (!localStorage.getItem('Auth')) {
    return <Navigate replace to="/login" />;
  }

  return (
    <button onClick={handleSignOut}>로그아웃</button>
  );
}

export default MyPage;
