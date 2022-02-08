import React from 'react';

import { CommentsProps } from '../routes/Home';
import WriteMetaInfo from './WriteMetaInfo';

function CommentsWrapper({ comments }: {comments: CommentsProps}) {
  return (
    <>
      {/* TODO: 댓글 입력 컴포넌트 */}
      <input type="text" placeholder="댓글을 입력하세요" />
      <ul>
        {comments.contents.map(({ id, user, text, createdAt }) => (
          <li key={id}>
            <WriteMetaInfo
              user={user}
              createdAt={createdAt}
            />
            <div>{text}</div>
            <div>점 세 개 버튼</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentsWrapper;
