import React, { useState } from 'react';

import Options from './Options';

function WriteMetaInfo({ isPost, id, user, createdAt }: {
  isPost: boolean,
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

  createdAt = new Date(createdAt);
  const year = String(createdAt.getFullYear()).slice(2, 4);
  const month = createdAt.getMonth() > 10
    ? createdAt.getMonth()
    : `0${createdAt.getMonth()}`;
  const date = createdAt.getDate() > 10
    ? createdAt.getDate()
    : `0${createdAt.getDate()}`;
  const createdAtString = `${year}.${month}.${date}`;

  return (
    <>
      <div className="write_meta_info">
        <div className="write_meta_info-avatar">
          <img src={user.avatar} alt="아바타" />
        </div>
        <div className="write_meta_info-user">
          {user.nickname}
        </div>
        <time
          className="write_meta_info-date"
          dateTime={String(createdAt)}
        >
          {createdAtString}
        </time>
        <button
          className="write_meta_info-options"
          onClick={handleOptionsView}
        >
          <img src="..\static\icons\icon_options.svg" alt="옵션 버튼" />
          {optionsView && <Options isPost={isPost} id={id} />}
        </button>
      </div>
    </>
  );
}

export default React.memo(WriteMetaInfo);
