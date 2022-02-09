import React from 'react';

import { CommentsProps } from '../routes/Home';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

function CommentsWrapper({ postId, comments }: {
  postId: number,
  comments: CommentsProps,
}) {
  return (
    <div className="comment">
      <CommentCreate postId={postId} />
      <CommentList comments={comments} />
    </div>
  );
}

export default React.memo(CommentsWrapper);
