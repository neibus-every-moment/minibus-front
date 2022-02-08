import React from 'react';

import { postComment } from '../apis/comment';
import useInput from '../hooks/useInput';

function CommentCreate() {
  const [comment, handleChangecomment] = useInput('');

  return (
    <div>
      {/* TODO: avatar 부분, 로그인 후 useSelector */}
      <form action="">
        <input
          type="text"
          placeholder="댓글을 입력하세요"
          value={comment}
          onChange={handleChangecomment}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default CommentCreate;
