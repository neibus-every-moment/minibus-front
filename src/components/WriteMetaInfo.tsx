import React, { useState } from 'react';

import PostOptions from './PostOptions';

function WriteMetaInfo({ id, user, createdAt }: {
  id: number,
  user: {
    nickname: string,
    avatar: string,
  },
  createdAt: Date,
}) {
  const [optionsView, setOptionsView] = useState(false);

  const handleOptionsView = () => {
    setOptionsView(prev => !prev);
  };

  return (
    // TODO: className -> writeMetaInfo 관련으로
    <>
      <div className="post-info">
        <div className="post-info-emotion">
          <img src="avatar" alt="아바타" />
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
        {optionsView && <PostOptions id={id} />}
      </button>
    </>
  );
}

export default WriteMetaInfo;
