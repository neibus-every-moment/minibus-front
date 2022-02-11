import React, { MouseEvent, useEffect, useState } from 'react';

import { getUserInfo } from '../apis/auth';
import { createComment } from '../apis/comment';
import useInput from '../hooks/useInput';
import { getAuthState, myUserId } from '../utils/hasAuth';

function CommentCreate({ postId }: { postId: number }) {
  const auth = getAuthState();
  const [avatar, setAvatar] = useState('');
  const [comment, handleChangeComment, clearComment] = useInput('');

  const handleSubmitComment = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (comment !== '') {
      await createComment({
        postId,
        userId: myUserId,
        content: comment,
      });
      clearComment();
    }
  };

  useEffect(() => {
    (async () => {
      const { user: { avatar } } = await getUserInfo(myUserId);
      setAvatar(avatar);
    })();
  }, []);

  return (
    <div className="comment-create">
      <form>
        {auth
          ? <>
            <img src={avatar} alt="유저 사진" />
            <input
              type="text"
              placeholder="댓글을 입력하세요"
              value={comment}
              onChange={handleChangeComment}
            />
            <button
              type="submit"
              onClick={handleSubmitComment}
            >
            등록
            </button>
          </>
          : <input
            type="text"
            placeholder="댓글은 회원만 입력할 수 있습니다"
            disabled
          />
        }
      </form>
    </div>
  );
}

export default React.memo(CommentCreate);
