import React from 'react';
import { Link } from 'react-router-dom';

import { deleteComment } from '../apis/comment';
import { deletePost } from '../apis/post';
import { myUserId } from '../utils/hasAuth';

function Options({ isPost, id, userId }: {
  isPost: boolean,
  id: number,
  userId: number,
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
      {isPost && (
        <>
          {userId !== myUserId
            ? <button>
              <Link to={reportPostUri}>
              신고하기
              </Link>
            </button>
            : <>
              <button onClick={() => handleDelete(id)}>
                삭제하기
              </button>
              <button>
                <Link to={editPostUri}>
                  수정하기
                </Link>
              </button></>
          }
        </>
      )}
      {!isPost && (
        <>
          {userId !== myUserId
            ? <button onClick={() => handleDelete(id)}>
              <Link to={reportCommentUri}>
              신고하기
              </Link>
            </button>
            : <button onClick={() => handleDelete(id)}>
          삭제하기
            </button>
          }
        </>
      )}
    </div>
  );
}

export default Options;
