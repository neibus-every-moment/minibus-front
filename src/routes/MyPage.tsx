import React from 'react';
import { useNavigate } from 'react-router';

function MyPage() {
  const navigate = useNavigate();

  if (localStorage.getItem('Auth')) {
    navigate('/login');
  }

  return (
    <div>안녕?</div>
  );
}

export default MyPage;
