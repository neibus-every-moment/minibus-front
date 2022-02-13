import React from 'react';
import useSWR, { useSWRConfig } from 'swr';

import { baseUrl } from '../apis/baseUrl';
import { likePost } from '../apis/post';
import useDebounce from '../hooks/useDebounce';
import { fetcher } from '../utils/fetcher';
import { myUserId } from '../utils/hasAuth';

interface LikeProps {
  postId: number
  isLikeActive: boolean,
  setIsLikeActive: React.Dispatch<React.SetStateAction<boolean>>
}

function Like({ postId, isLikeActive, setIsLikeActive }: LikeProps) {
  const { mutate } = useSWRConfig();

  const debouncedSearch = useDebounce(true, 1000);
  const { data } = useSWR(
    () => (
      debouncedSearch
        ? `${baseUrl}/post/${postId}`
        : null
    ),
    fetcher,
  );

  const handleToggleLike = async () => {
    mutate('/api/user', { ...data }, false);
    setIsLikeActive(prev => !prev);
    await likePost(postId, myUserId);
    mutate(`${baseUrl}/post/${postId}`);
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
        {data?.like.count}
      </div>
    </>
  );
}

export default React.memo(Like);
