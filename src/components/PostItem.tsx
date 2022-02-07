import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Comments from './Comments';
import ImageSwiper from './ImageSwiper';
import { PostProps } from './PostList';

function PostItem({ post }: { post: PostProps }) {
  const {
    id,
    user,
    createdAt,
    // updatedAt,
    transportations,
    regions,
    contents,
    like,
    comments,
  } = post;
  const tags = [...transportations, ...regions];
  const reportUri = `/report/post/${id}`;
  const [commentsView, setCommentsView] = useState(false);

  const handleCommentsView = () => {
    setCommentsView(prev => !prev);
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
          <div className="post-info">
            <div className="post-info-emotion">
              <img src="..\static\dummy\avatar-empty.png" alt="아바타" />
            </div>
            <div className="post-info-user">
              {user.nickname}
            </div>
            <time
              className="post-info-date"
              dateTime={String(createdAt)}
            >
              {createdAt.toLocaleDateString()}
            </time>
          </div>
          <Link to={reportUri} className="post-report">
            <img src="..\static\icons\icon_report.svg" alt="신고 버튼" />
          </Link>
        </div>
        <div className="post-content">
          <p className="post-content-text">
            {contents.text}
          </p>
          <ImageSwiper images={contents.images} />
        </div>
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
        {commentsView && <Comments />}
      </div>
    </>
  );
}

export default PostItem;
