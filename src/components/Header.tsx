import React, { useEffect, useState } from 'react';

import SideMenu from './SideMenu';

function Header() {
  const [title, setTitle] = useState('지금 어디가?');
  const [view, setView] = useState(false);

  const defaultPath = 'http://localhost:3000/';//TODO: 변수 모듈화
  const path = document.location.href;

  // TODO: 새로고침 전에는 인식하지 못하는 문제
  // 다른 방식으로 해결해야 할 것을 예상됨
  if (path === `${defaultPath}write`) {
    return null;
  }

  useEffect(() => {
    switch (path) {
    case defaultPath: setTitle('지금 어디가?');
      break;

    case `${defaultPath}bingo`: setTitle('도전! 데일리빙고');
      break;

    case `${defaultPath}quiz`: setTitle('교통상식퀴즈');
      break;

    default: setTitle('지금 어디가');
      break;
    }
  }, []);

  const onSideMenuToggle = () => {
    setView((prev) => !prev);
  };

  return (
    <>
      <header className='container'>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='header'>
              <h1 className='header-title'>{title}</h1>
              <button onClick={onSideMenuToggle}>
                <img src="/static/icons/hamburger.svg" alt="메뉴 보기" />
              </button>
            </div>
          </div>
        </div>
      </header>
      {view && <SideMenu onSideMenuToggle={onSideMenuToggle}/>}
    </>);
}

export default Header;
