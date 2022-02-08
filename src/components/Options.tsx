import React from 'react';
import { Link } from 'react-router-dom';

import { deletePost } from '../apis/post';

function Options({ id }: {id: number}) {
  const editUri = `/write/${id}`;
  const reportUri = `/report/post/${id}`;

  const handleDeletePost = (id: number) => {
    const response = confirm('정말로 삭제하시겠습니까?');
    if (response) {
      deletePost(id);
    }
  };

  return (
    <ul>
      {/* TODO: 로그인되면 회원 여부에 따라 다르게 보여주기 */}
      <li>
        <button>
          <Link to={reportUri} className="post-options-report">
            신고하기
          </Link>
        </button>
      </li>
      <li>
        <button onClick={() => handleDeletePost(id)}>
          삭제하기
        </button>
      </li>
      <li>
        <button>
          <Link to={editUri}>
            수정하기
          </Link>
        </button>
      </li>
    </ul>
  );
}

export default Options;
