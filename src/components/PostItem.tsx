import React, { useEffect, useState } from 'react';

import { PostProps } from '../routes/Home';
import CommentsWrapper from './CommentsWrapper';
import Like from './Like';
import PostContent from './PostContent';
import WriteMetaInfo from './WriteMetaInfo';

function PostItem({ post }: { post: PostProps }) {
  const {
    id,
    user,
    createdAt,
    // updatedAt,
    transportation,
    region,
    text,
    images,
    like,
    comments,
  } = post;
  const tags = [transportation, region];
  const [commentsView, setCommentsView] = useState(true);
  const [isLikeActive, setIsLikeActive] = useState(false);

  const handleCommentsView = () => {
    setCommentsView(prev => !prev);
  };

  useEffect(() => {
    // TODO: 파라미터는 userId
    if (like.users.includes(1)) {
      setIsLikeActive(prev => !prev);
    }
  }, []);

  return (
    <>
      <div className="post-container">
        <ul className="post-tag_list">
          {tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="post-top">
          <WriteMetaInfo
            id={id}
            user={user}
            createdAt={createdAt}
          />
        </div>
        <PostContent
          text={text}
          images={images}
        />
        <div className="post-bottom">
          <Like
            postId={id}
            count={like.count}
            isLikeActive={isLikeActive}
            setIsLikeActive={setIsLikeActive}
          />
          <button
            className="post-comment"
            onClick={handleCommentsView}
          >
            <img src="static/icons/icon_comment.svg" alt="댓글 버튼" />
          </button>
          <div className="post-comment-count">
            {comments.count}
          </div>
        </div>
        {commentsView &&
        <CommentsWrapper
          postId={id}
          comments={comments}
        />
        }
      </div>
    </>
  );
}

export default PostItem;
