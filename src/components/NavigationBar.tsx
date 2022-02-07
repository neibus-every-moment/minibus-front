import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


function NavigationBar () {
  const [me, setMe] = useState(true);
  const location = useLocation();
  const { pathname } = location;

  if (pathname === '/report') {
    return null;
  }

  return (
    <>
      <nav>
        <h1 className="sr-only">
          네비게이션 메뉴
        </h1>
        <ul>
          <li>
            <Link
              to="/"
              className={pathname === '/' ? 'isActive' : ''}
            >
              <img src="" alt="메인페이지" />
            </Link>
          </li>
          <li >
            <Link
              to="/quiz"
              className={pathname === '/quiz' ? 'isActive' : ''}
            >
              <img src="" alt="퀴즈페이지" />
            </Link>
          </li>
          <li>
            <Link to="/write">
              <img src="" alt="글쓰기" />
            </Link>
          </li>
          <li>
            <Link
              to="/bingo"
              className={pathname === '/bingo' ? 'isActive' : ''}
            >
              <img src="" alt="빙고페이지" />
            </Link>
          </li>
          <li>
            {me ? <Link
              to="/mypage"
              className={pathname === '/mypage' ? 'isActive' : ''}>
              <img src="" alt="마이페이지" />
            </Link> :
              <Link
                to="/login"
                className={pathname === '/login' ? 'isActive' : ''}>
                <img src="" alt="로그인 하러가기" />
              </Link>
            }
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationBar;
