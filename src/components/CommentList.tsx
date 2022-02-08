import React from 'react';

import { CommentsProps } from '../routes/Home';
import WriteMetaInfo from './WriteMetaInfo';

function CommentList({ comments }: {comments: CommentsProps}) {
  return (
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
  );
}

export default CommentList;
