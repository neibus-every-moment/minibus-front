import React, { useEffect, useState } from 'react';

import SideMenu from './SideMenu';

function Header() {
  const [title, setTitle] = useState('지금 어디가');
  const [view, setView] = useState(false);

  const defalutPath = 'http://localhost:3000/';
  const path = document.location.href;

  useEffect(() => {
    switch (path) {
    case defalutPath: setTitle('지금 어디가');
      break;

    case `${defalutPath}bingo`: setTitle('도전! 데일리빙고');
      break;

    case `${defalutPath}quiz`: setTitle('교통상식퀴즈');
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
      {view && <SideMenu />}
    </>);
}

export default Header;
