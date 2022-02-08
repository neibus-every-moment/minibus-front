import React from 'react';
import { Link } from 'react-router-dom';

import { deleteComment } from '../apis/comment';
import { deletePost } from '../apis/post';

function Options({ id }: { id: number }) {
  const editPostUri = `/write/${id}`;
  const reportPostUri = `/report/post/${id}`;

  const handleDeletePost = (id: number) => {
    const response = confirm('정말로 삭제하시겠습니까?');
    if (response) {
      deletePost(id);
    }
  };

  const handleDeleteComment = (id: number) => {
    const response = confirm('정말로 삭제하시겠습니까?');
    if (response) {
      deleteComment(id);
    }
  };

  return (
    <div className="options">
      {/* TODO: 로그인되면 회원 여부에 따라 다르게 보여주기 */}
      {/* TODO: post -> 삭제, 수정, 신고 / comment -> 삭제, 신고 */}
      <button>
        <Link to={reportPostUri}>
            게시글 신고하기
        </Link>
      </button>
      <button onClick={() => handleDeletePost(id)}>
          게시글 삭제하기
      </button>
      <button>
        <Link to={editPostUri}>
            수정하기
        </Link>
      </button>
      <button onClick={() => handleDeleteComment(id)}>
          댓글 삭제하기
      </button>
    </div>
  );
}

export default Options;
