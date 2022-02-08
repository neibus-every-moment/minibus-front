import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { deletePost } from '../apis/post';
import { PostProps } from '../routes/Home';
import Comments from './Comments';
import ImageSwiper from './ImageSwiper';

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
    likeCount,
    comments,
  } = post;
  const tags = [transportation, region];
  const editUri = `/write/${id}`;
  const reportUri = `/report/post/${id}`;
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
              {String(createdAt)}
            </time>
          </div>
          <button
            className="post-options"
            onClick={handleOptionsView}
          >
            <img src="..\static\icons\icon_options.svg" alt="옵션 버튼" />
            {optionsView &&
            <ul>
              {/* TODO: 로그인되면 회원 여부에 따라 다르게 보여주기 */}
              <li>
                <button>
                  <Link to={reportUri} className="post-options-report">
                  신고하기
                  </Link>
                </button>
              </li>
              <li>
                <button onClick={() => deletePost(id)}>
                  삭제하기
                </button>
              </li>
              <li>
                <button>
                  <Link to={editUri}>
                    수정하기
                  </Link>
                </button>
              </li>
            </ul>}
          </button>
        </div>
        <div className="post-content">
          <p className="post-content-text">
            {text}
          </p>
          <ImageSwiper images={images} />
        </div>
        <div className="post-bottom">
          <button className="post-like">
            <div className="post-like-btn">
              <img src="..\static\icons\icon_like_empty.svg" alt="추천 버튼" />
            </div>
          </button>
          <div className="post-like-count">
            {likeCount}
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
        {commentsView && <Comments comments={comments} />}
      </div>
    </>
  );
}

export default PostItem;
