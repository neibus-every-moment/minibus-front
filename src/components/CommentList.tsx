import React from 'react';
import useSWR from 'swr';

import { CommentProps } from '../routes/Home';
import { fetcher } from '../utils/fetcher';
import WriteMetaInfo from './WriteMetaInfo';

function CommentList({ postId }: { postId: number }) {
  const { data } = useSWR(
    `http://3.37.182.59:8080/api/comments/${postId}`,
    fetcher,
    { refreshInterval: 1000 },
  );

  return (
    <ul className="comment-list">
      {data?.map((comment: CommentProps) => (
        <li key={comment.id}>
          <WriteMetaInfo
            isPost={false}
            id={comment.id}
            user={comment.user}
            createdAt={comment.createdAt}
          />
          <div className="comment-text">
            {comment.text}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(CommentList);
