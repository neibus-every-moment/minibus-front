import React from 'react';

import { CommentsProps } from '../routes/Home';
import WriteMetaInfo from './WriteMetaInfo';

function CommentList({ comments }: {comments: CommentsProps}) {
  return (
    <ul className="comment-list">
      {comments.contents.map(({ id, user, text, createdAt }) => (
        <li key={id}>
          <WriteMetaInfo
            id={id}
            user={user}
            createdAt={createdAt}
          />
          <div>{text}</div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
