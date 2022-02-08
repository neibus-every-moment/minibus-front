import React from 'react';

import { CommentsProps } from '../routes/Home';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

function CommentsWrapper({ postId, comments }: {
  postId: number,
  comments: CommentsProps,
}) {
  return (
    <>
      <CommentCreate postId={postId} />
      <CommentList comments={comments} />
    </>
  );
}

export default CommentsWrapper;
