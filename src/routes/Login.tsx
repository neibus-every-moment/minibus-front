import React from 'react';
import { Navigate, useNavigate } from 'react-router';

import { saveAuth } from '../apis/auth';

function Login() {
  const navigate = useNavigate();
  const handleSignin = async () => {
    try {
      await saveAuth();
    } catch (e) {
      console.error(e);
    }

    if (localStorage.getItem('Auth')) {
      navigate('/#/mypage');
    }
  };

  if (localStorage.getItem('Auth')) {
    return <Navigate replace to="/#/mypage" />;
  }

  return (
    <>
      <div className="container">
        <div className="login-container">
          <div className="row">
            <div className="col-sm-4">
              <img
                src="static/images/logo_bus.png"
                alt="버스 로고"
                className="logo-bus"
              />
            </div>
            <div className="col-sm-4">
              <img
                src="static/images/logo.png"
                alt="네이버스"
                className="logo"
              />
            </div>
            <div className="col-sm-4">
              <button className="login-kakao" onClick={handleSignin}>
                <img
                  src="static/images/login_kakao.png"
                  alt="카카오 로그인"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
