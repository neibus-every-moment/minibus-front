import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
  const [title, setTitle] = useState('지금 어디가?');

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    switch (pathname) {
    case '/':
      setTitle('지금 어디가?');
      break;

    case '/bingo':
      setTitle('도전! 데일리빙고');
      break;

    case '/quiz':
      setTitle('교통상식퀴즈');
      break;

    case '/mypage':
      setTitle('마이페이지');
      break;

    default:
      setTitle('지금 어디가');
      break;
    }
  }, [pathname]);

  if (pathname === ('/write' || 'report' || '/login')) {
    return null;
  }

  return (
    <>
      <header className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="header">
              <h1 className="header-title">{title}</h1>
            </div>
          </div>
        </div>
      </header>
    </>);
}

export default Header;
