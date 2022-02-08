import React from 'react';

import { CommentsProps } from '../routes/Home';

function CommentsWrapper({ comments }: {comments: CommentsProps}) {
  return (
    <>
      {/* TODO: 댓글 입력 컴포넌트 */}
      <input type="text" placeholder="댓글을 입력하세요" />
      <ul>
        {comments.contents.map(({ id, user, text, createdAt }) => (
          <li key={id}>
            <div>{user.avatar}</div>
            <div>{user.nickname}</div>
            <div>{createdAt}</div>
            <div>{text}</div>
            <div>점 세 개 버튼</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentsWrapper;
