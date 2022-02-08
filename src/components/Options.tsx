import React from 'react';
import { Link } from 'react-router-dom';

import { deleteComment } from '../apis/comment';
import { deletePost } from '../apis/post';

function Options({ isPost, id }: {
  isPost: boolean,
  id: number,
}) {
  const editPostUri = `/write/${id}`;
  const reportPostUri = `/report/post/${id}`;
  const reportCommentUri = `/report/comment/${id}`;

  const handleDelete = (id: number) => {
    const response = confirm('정말로 삭제하시겠습니까?');
    if (response) {
      if (isPost) {
        deletePost(id);
        return;
      }
      deleteComment(id);
    }
  };

  return (
    <div className="options">
      {/* TODO: 로그인되면 회원 여부에 따라 다르게 보여주기 */}
      {isPost && (
        <>
          <button>
            <Link to={reportPostUri}>
              신고하기
            </Link>
          </button>
          <button onClick={() => handleDelete(id)}>
            삭제하기
          </button>
          <button>
            <Link to={editPostUri}>
              수정하기
            </Link>
          </button>
        </>
      )}
      {!isPost && (
        <>
          <button onClick={() => handleDelete(id)}>
            삭제하기
          </button>
          {/* TODO: 댓글 신고 버튼 */}
          <button onClick={() => handleDelete(id)}>
            <Link to={reportCommentUri}>
              신고하기
            </Link>
          </button>
        </>
      )}
    </div>
  );
}

export default Options;
