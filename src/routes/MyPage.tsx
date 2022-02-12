import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router';

import { getUserInfo, signOut } from '../apis/auth';
import { myUserId } from '../utils/hasAuth';


function MyPage() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    nickname: '',
    email: '',
    avatar: '',
    posts: [],
    comments: [],
  });

  useEffect(() => {
    (async () => {
      const res = await getUserInfo(myUserId);
      const {
        user: { nickname, email, avatar },
        posts,
        comments,
      } = res;

      setUserInfo({
        nickname,
        email,
        avatar,
        posts,
        comments,
      });
    })();
  }, []);

  const handleSignOut = async () => {
    try {
      const res = await signOut();

      if (res) {
        localStorage.removeItem('Auth');
        navigate('/');
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (!localStorage.getItem('Auth')) {
    return <Navigate replace to="/login" />;
  }

  return (
    <>
      <div className="container">
        <div className="mypage">
          <div className="row">
            <div className="col-sm-4">
              <section>
                <img src={userInfo.avatar} alt="유저 사진" width={68} />
                <div>{userInfo.nickname}</div>
              </section>
              <section>
                <div>
                  <div>
                    <div>{userInfo.posts.length}</div>
                    <div>내가 쓴 글</div>
                  </div>
                  <div>
                    <div>{userInfo.comments.length}</div>
                    <div>내가 쓴 댓글</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <section>
                <h6>내 정보</h6>
                <div>
                  <div>계정정보</div>
                  <div>{userInfo.email}</div>
                </div>
                <button onClick={handleSignOut}>로그아웃</button>
                <div>회원탈퇴</div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPage;
