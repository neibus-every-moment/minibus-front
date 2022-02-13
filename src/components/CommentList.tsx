import React from 'react';
import useSWR from 'swr';

import { baseUrl } from '../apis/baseUrl';
import { CommentProps } from '../routes/Home';
import { fetcher } from '../utils/fetcher';
import CommentItem from './CommentItem';

function CommentList({ postId }: { postId: number }) {
  const { data } = useSWR(
    `${baseUrl}/comments/${postId}`,
    fetcher,
    { refreshInterval: 1000 },
  );

  return (
    <ul className="comment-list">
      {data?.map((comment: CommentProps) => (
        <CommentItem
          key={comment.id}
          comment={comment}
        />
      ))}
    </ul>
  );
}

export default React.memo(CommentList);
