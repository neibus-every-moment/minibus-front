import React from 'react';
import { Navigate, useNavigate } from 'react-router';

import { signOut } from '../apis/auth';

function MyPage() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const res = await signOut();

      if (res) {
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
