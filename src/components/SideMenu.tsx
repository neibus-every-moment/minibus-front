import React, { MouseEventHandler } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SideMenuProps {
  onSideMenuToggle: MouseEventHandler;
} // handler 종류 상 모바일에서 안될 수도 있음

function SideMenu ({ onSideMenuToggle }: SideMenuProps) {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <aside className="side_menu">
        <h1 className="side_menu-logo" aria-label="미니버스 로고">
          <img src="/static/icons/minibus.svg" alt="미니버스" />
        </h1>
        <h2 className="sr-only">사이드 메뉴</h2>
        <button
          type="button"
          aria-label="닫기 버튼"
          onClick={onSideMenuToggle}
          className="close_btn"
        >
          <div>
            <img src="/static/icons/cancel-black.svg" alt="닫기 버튼" />
          </div>
        </button>
        <ul className="page_link_list">
          <li className="page_link_item" onClick={onSideMenuToggle}>
            <Link
              to="/"
              className={pathname === '/' ? 'isActive' : ''}
            >
              지금 어디가?
            </Link>
          </li>
          <li className="page_link_item" onClick={onSideMenuToggle}>
            <Link
              to="/quiz"
              className={pathname === '/quiz' ? 'isActive' : ''}
            >
              교통상식 테스트
            </Link>
          </li>
          <li className="page_link_item" onClick={onSideMenuToggle}>
            <Link
              to="/bingo"
              className={pathname === '/bingo' ? 'isActive' : ''}
            >
              도전! 데일리빙고
            </Link>
          </li>
          <li className="page_link_item" onClick={onSideMenuToggle}>
            <Link
              to="/faq"
              className={pathname === '/faq' ? 'isActive' : ''}
            >
              FAQ
            </Link>
          </li>
        </ul>

        <div className="side_menu_bottom">
          <ul className="external_link_list">
            <li className="external_link_item">
              <Link to="">
                <img src="/static/icons/neibus.svg" alt="네이버스 바로가기 링크" />
              </Link>
            </li>
            <li className="external_link_item">
              <Link to="">
                <img src="/static/icons/instagram.svg" alt="네이버스 인스타그램 바로가기" />
              </Link>
            </li>
            <li className="external_link_item">
              <Link to="">
                <img src="/static/icons/facebook.svg" alt="네이버스 페이스북 바로가기" />
              </Link>
            </li>
          </ul>
          <p className="copyright">&copy; Nei&amp;Company Corp.</p>
        </div>
      </aside>

      <div className="shadow" onClick={onSideMenuToggle}></div>
    </>
  );
}

export default SideMenu;
