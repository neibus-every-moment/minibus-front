import React, { useState } from 'react';

import { PostProps } from '../routes/Home';
import CommentsWrapper from './CommentsWrapper';
import PostContent from './PostContent';
import PostOptions from './PostOptions';
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
  const [commentsView, setCommentsView] = useState(false);
  const [optionsView, setOptionsView] = useState(false);

  const handleCommentsView = () => {
    setCommentsView(prev => !prev);
  };

  const handleOptionsView = () => {
    setOptionsView(prev => !prev);
  };

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
            user={user}
            createdAt={createdAt}
          />
          <button
            className="post-options"
            onClick={handleOptionsView}
          >
            <img src="..\static\icons\icon_options.svg" alt="옵션 버튼" />
            {optionsView && <PostOptions id={id} />}
          </button>
        </div>
        <PostContent
          text={text}
          images={images}
        />
        <div className="post-bottom">
          <button className="post-like">
            <div className="post-like-btn">
              <img src="..\static\icons\icon_like_empty.svg" alt="추천 버튼" />
            </div>
          </button>
          <div className="post-like-count">
            {like.count}
          </div>
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
