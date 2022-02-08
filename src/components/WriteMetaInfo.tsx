import React from 'react';

function WriteMetaInfo({ user, createdAt }: {
  user: {
    nickname: string,
    avatar: string,
  },
  createdAt: Date,
}) {
  return (
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
  );
}

export default WriteMetaInfo;
