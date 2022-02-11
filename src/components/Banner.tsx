import React from 'react';
import { Link } from 'react-router-dom';

function Banner () {
  return (
    <aside className="banner">
      <h2 className="sr-only">퀴즈페이지로 이동</h2>
      <Link to ="/quiz">
        <img src="/static/images/quizBanner.png" alt="퀴즈페이지로 이동" />
      </Link>
    </aside>
  );
}

export default React.memo(Banner);
