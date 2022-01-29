import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { LOG_IN_REQUEST } from '../redux/ducks/user';
import { userState } from '../typings/user';
import SideMenu from './SideMenu';

function Header() {
  const dispatch = useDispatch();
  const nickname = useSelector((state:userState) => state.nickname);
  const [title, setTitle] = useState('지금 어디가?');
  const [view, setView] = useState(false);

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

    case '/faq':
      setTitle('FAQ');
      break;

    default:
      setTitle('지금 어디가');
      break;
    }
  }, [pathname]);

  if (pathname === '/write') {
    return null;
  }

  const onSideMenuToggle = () => {
    setView((prev) => !prev);
  };

  return (
    <>
      <header className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="header">
              <h1 className="header-title">{title}</h1>
              <button onClick={onSideMenuToggle}>
                <img src="/static/icons/hamburger.svg" alt="메뉴 보기" />
              </button>
            </div>
          </div>
        </div>
      </header>
      {view && <SideMenu onSideMenuToggle={onSideMenuToggle} />}
    </>);
}

export default Header;
