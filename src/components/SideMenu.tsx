import React, { MouseEventHandler } from 'react';

interface SideMenuProps {
  onSideMenuToggle: MouseEventHandler<HTMLButtonElement>;
}

function SideMenu ({ onSideMenuToggle }:SideMenuProps) {
  return (
    <aside className='side_menu'>
      <h2 className='sr-only'>사이드 메뉴</h2>
      <button type="button" aria-label="닫기 버튼" onClick={onSideMenuToggle}>
        <div className='close_btn'>
          <img src="" alt="닫기 버튼" />
        </div>
      </button>
      <ul className='page_link_list'>
        <li className='page_link_item'>
          <a href="">지금 어디가?</a>
        </li>
        <li className='page_link_item'>
          <a href="">도전! 일상빙고</a>
        </li>
        <li className='page_link_item'>
          <a href="">교통상식 테스트</a>
        </li>
        <li className='page_link_item'>
          <a href="">FAQ</a>
        </li>
      </ul>

      <ul className='external_link_list'>
        <li className='external_link_item'>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
        <li className='external_link_item'>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
        <li className='external_link_item'>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
      </ul>

      <p>&copy; Nei&amp;Company Corp.</p>
    </aside>);
}

export default SideMenu;
