import React from 'react';
import { Link } from 'react-router-dom';

import { deletePost } from '../apis/post';


function PostOptions({ id }: {id: number}) {
  const editUri = `/write/${id}`;
  const reportUri = `/report/post/${id}`;
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
        <button onClick={() => deletePost(id)}>
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

export default PostOptions;
