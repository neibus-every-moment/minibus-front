import React from 'react';

import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

function CommentsWrapper({ postId }: { postId: number}) {
  return (
    <div className="comment">
      <CommentCreate postId={postId} />
      <CommentList postId={postId} />
    </div>
  );
}

export default React.memo(CommentsWrapper);
