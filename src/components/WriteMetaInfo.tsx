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

  return (
    <>
      <div className="write_meta_info">
        <div className="write_meta_info-avatar">
          <img src="avatar" alt="아바타" />
        </div>
        <div className="write_meta_info-user">
          {user.nickname}
        </div>
        <time
          className="write_meta_info-date"
          dateTime={String(createdAt)}
        >
          {String(createdAt)}
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
