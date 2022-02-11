import React, { useState } from 'react';

function MyPage() {
  const [hasAuth, setHasAuth] = useState(false);

  return (
    // 로그인 전
    <>
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
      <img
        src="static/images/login_kakao.png"
        alt="카카오 로그인"
        className="login-kakao"
      />
    </>
  );
}

export default MyPage;
