import React, { MouseEvent } from 'react';

import { createComment } from '../apis/comment';
import useInput from '../hooks/useInput';

function CommentCreate({ postId }: { postId: number }) {
  const [comment, handleChangeComment, clearComment] = useInput('');

  const handleSubmitComment = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (comment !== '') {
      await createComment({
        postId,
        userId: 1, // TODO: 로그인 후 useSelctor로 받아오기
        content: comment,
      });
      clearComment();
    }
  };

  return (
    <div className="comment-create">
      {/* TODO: avatar 부분, 로그인 후 useSelector */}
      <img src="user.avatar" alt="유저 사진" />
      <form>
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
      </form>
    </div>
  );
}

export default React.memo(CommentCreate);
