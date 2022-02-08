import React from 'react';

import { likePost } from '../apis/post';

interface LikeProps {
  postId: number
  count: number,
  isLikeActive: boolean,
  setIsLikeActive: React.Dispatch<React.SetStateAction<boolean>>
}

function Like({ postId, count, isLikeActive, setIsLikeActive }: LikeProps) {
  const handleToggleLike = () => {
    likePost(postId, 1); // TODO: 두 번째 인자는 userId
  };

  return (
    <>
      <button
        className="post-like"
        onClick={handleToggleLike}
      >
        <div className="post-like-btn">
          <img src="..\static\icons\icon_like_empty.svg" alt="추천 버튼" />
        </div>
      </button>
      <div className="post-like-count">
        {count}
      </div>
    </>
  );
}

export default Like;
