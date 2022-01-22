import React from 'react';
import { Link } from 'react-router-dom';

function WriteButton() {
  return (
    <div className="write_btn">
      <Link to='/write'>
        <img src="/static/icons/write.svg" alt="글쓰기 페이지로 이동" />
      </Link>
    </div>
  );
}

export default WriteButton;
