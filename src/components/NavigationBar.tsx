import { image } from 'html2canvas/dist/types/css/types/image';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


function NavigationBar () {
  const location = useLocation();
  const { pathname } = location;

  if (pathname.includes('/report')) {
    return null;
  }

  return (
    <>
      <nav className="navigation">
        <h1 className="sr-only">
          네비게이션 메뉴
        </h1>
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link to="/">
              {
                pathname === '/' ?
                  <img
                    src="/static/icons/icon-active-home.svg"
                    alt="현재 메인페이지" /> :
                  <img src="/static/icons/icon-home.svg" alt="메인페이지로 이동" />
              }
            </Link>
          </li>
          <li className="navigation-item">
            <Link to="/quiz">
              {pathname === '/quiz' ?
                <img
                  src="/static/icons/icon-active-quiz.svg"
                  alt="현재 퀴즈페이지" /> :
                <img src="/static/icons/icon-quiz.svg" alt="퀴즈페이지로 이동" />}

            </Link>
          </li>
          <li className="navigation-item write">
            <Link to="/write">
              <img src="/static/icons/icon-write.svg" alt="글쓰기" />
            </Link>
          </li>
          <li className="navigation-item">
            <Link to="/bingo">
              {pathname === '/bingo' ?
                <img
                  src="/static/icons/icon-active-bingo.svg"
                  alt="현재 빙고페이지" /> :
                <img src="/static/icons/icon-bingo.svg" alt="빙고페이지로 이동" />
              }
            </Link>
          </li>
          <li className="navigation-item">
            {localStorage.getItem('Auth') ? <Link to="/mypage">
              {pathname === '/mypage' ?
                <img
                  src="/static/icons/icon-active-user.svg"
                  alt="현재 마이페이지" /> :
                <img src="/static/icons/icon-user.svg" alt="마이페이지로 이동" />}
            </Link> :
              <Link to="/login">
                {pathname === '/login' ?
                  <img
                    src="/static/icons/icon-active-login.svg"
                    alt="현재 로그인 페이지" /> :
                  <img src="/static/icons/icon-login.svg" alt="로그인 하러가기" />
                }
              </Link>
            }
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationBar;
