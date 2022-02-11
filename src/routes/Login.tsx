import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router';

import { baseUrl } from '../apis/baseUrl';

function Login() {
  const navigate = useNavigate();
  const handleLogin = async() => {
    try {
      const resToken = await axios.post(`${baseUrl}/auth/login`, {
        email: 'test@test.com',
        nickname: 'test계정입니다',
        profileImage: 'test',
      });

      const ACCESS_TOKEN = resToken.data.token;
      localStorage.setItem('Auth', ACCESS_TOKEN);

      if (localStorage.getItem('Auth')) {
        navigate('/mypage');
      }

    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="login-container">
        <img
          src="static/images/logo_bus.png"
          alt="버스 로고"
          className="logo-bus"
        />
        <img
          src="static/images/logo.png"
          alt="네이버스"
          className="logo"
        />
        <button className="login-kakao" onClick={handleLogin}>
          <img
            src="static/images/login_kakao.png"
            alt="카카오 로그인"
          />
        </button>
      </div>
    </>
  );
}

export default Login;
