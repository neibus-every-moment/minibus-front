import React, { useState } from 'react';

import { likePost } from '../apis/post';

interface LikeProps {
  postId: number
  count: number,
  isLikeActive: boolean,
  setIsLikeActive: React.Dispatch<React.SetStateAction<boolean>>
}

function Like({ postId, count, isLikeActive, setIsLikeActive }: LikeProps) {
  const [tempLikeCount, setTempLikeCount] = useState(count);

  const handleToggleLike = () => {
    likePost(postId, 1); // TODO: 두 번째 인자는 userId
    setIsLikeActive(prev => !prev);

    if (isLikeActive) {
      setTempLikeCount(count => count - 1);
      return;
    }
    setTempLikeCount(count => count + 1);
  };

  return (
    <>
      <button
        className="post-like"
        onClick={handleToggleLike}
      >
        <div className="post-like-btn">
          {isLikeActive
            ? <img src="..\static\icons\icon_like_pressed.svg" alt="추천 버튼" />
            : <img src="..\static\icons\icon_like_unpressed.svg" alt="추천 버튼" />
          }
        </div>
      </button>
      <div className="post-like-count">
        {tempLikeCount}
      </div>
    </>
  );
}

export default Like;
