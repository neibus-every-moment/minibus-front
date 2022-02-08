import React from 'react';

import { CommentsProps } from '../routes/Home';
import CommentList from './CommentList';

function CommentsWrapper({ comments }: {comments: CommentsProps}) {
  return (
    <>
      {/* TODO: 댓글 입력 컴포넌트 */}
      <input type="text" placeholder="댓글을 입력하세요" />
      <CommentList comments={comments} />
    </>
  );
}

export default CommentsWrapper;
