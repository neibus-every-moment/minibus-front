import React, { MouseEventHandler } from 'react';

interface SideMenuProps {
  onSideMenuToggle: MouseEventHandler;
}//handler 종류 상 모바일에서 안될 수도 있음

function SideMenu ({ onSideMenuToggle }:SideMenuProps) {
  const defaultPath = 'http://localhost:3000/'; //TODO: 변수 모듈화

  return (
    <>
      <aside className='side_menu'>
        <h2 className='sr-only'>사이드 메뉴</h2>
        <button type="button" aria-label="닫기 버튼" onClick={onSideMenuToggle} className='close_btn'> {/* TODO: lint 룰 (속성 한 줄에 너무 많음) */}
          <div>
            <img src="/static/icons/cancel-black.svg" alt="닫기 버튼" />
          </div>
        </button>
        <ul className='page_link_list'>
          <li className='page_link_item'>
            <a href={defaultPath}>지금 어디가?</a>
          </li>
          <li className='page_link_item'>
            <a href={`${defaultPath}bingo`}>도전! 일상빙고</a>
          </li>
          <li className='page_link_item'>
            <a href={`${defaultPath}quiz`}>교통상식 테스트</a>
          </li>
          <li className='page_link_item'>
            <a href={`${defaultPath}faq`}>FAQ</a>
          </li>
        </ul>

        <div className='side_menu_bottom'>
          <ul className='external_link_list'>
            <li className='external_link_item'>
              <a href="">
                <img src='/static/icons/neibus.svg' alt="네이버스 바로가기 링크" />
              </a>
            </li>
            <li className='external_link_item'>
              <a href="">
                <img src="/static/icons/instagram.svg" alt="네이버스 인스타그램 바로가기" />
              </a>
            </li>
            <li className='external_link_item'>
              <a href=""> {/* TODO: lint 룰 따옴표 통일*/}
                <img src="/static/icons/facebook.svg" alt="네이버스 페이스북 바로가기" />
              </a>
            </li>
          </ul>
          <p className='copyright'>&copy; Nei&amp;Company Corp.</p>
        </div>
      </aside>

      <div className='shadow' onClick={onSideMenuToggle}></div>
    </>
  );
}

export default SideMenu;
