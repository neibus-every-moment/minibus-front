import React from 'react';
import { Link } from 'react-router-dom';

function Banner () {
  return (
    <aside>
      <h2 className="sr-only">퀴즈페이지로 이동</h2>
      <Link to ="/quiz">
        <img src="" alt="퀴즈페이지로 이동" />
      </Link>
    </aside>
  );

}

export default React.memo(Banner);
