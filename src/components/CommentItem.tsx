import React from 'react';

import { CommentProps } from '../routes/Home';
import WriteMetaInfo from './WriteMetaInfo';

function CommentItem({ comment }: { comment: CommentProps }) {
  return (
    <li>
      <WriteMetaInfo
        isPost={false}
        id={comment.id}
        user={comment.user}
        createdAt={comment.createdAt}
        updatedAt={comment.updatedAt}
      />
      <div className="comment-text">
        {comment.text}
      </div>
    </li>
  );
}

export default React.memo(CommentItem);
