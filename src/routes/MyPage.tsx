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
  const [isPostsView, setIsPostsView] = useState(false);
  const [isCommentsView, setIsCommentsView] = useState(false);

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

  const handleToggleContentsView = (type: string) => {
    if (type === 'posts') {
      setIsCommentsView(false);
      setIsPostsView(prev => !prev);
    }
    if (type === 'comments') {
      setIsPostsView(false);
      setIsCommentsView(prev => !prev);
    }
  };

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
              {!isPostsView && !isCommentsView &&
              <section className="mypage-profile">
                <div className="mypage-profile-avatar">
                  <div>
                    <img
                      src={userInfo.avatar}
                      alt="유저 사진"
                      className="mypage-profile-avatar-image"
                    />
                    <img
                      src="static/icons/icon-settings.svg"
                      alt="프로필 이미지 변경"
                      className="mypage-profile-avatar-edit"
                    />
                  </div>
                </div>
                <div className="mypage-profile-nickname">
                  {userInfo.nickname}
                </div>
              </section>}
              <section className="mypage-contents">
                <div onClick={() => handleToggleContentsView('posts')}>
                  <div>{userInfo.posts.length}</div>
                  <div>내가 쓴 글</div>
                </div>
                <div onClick={() => handleToggleContentsView('comments')}>
                  <div>{userInfo.comments.length}</div>
                  <div>내가 쓴 댓글</div>
                </div>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              {isPostsView &&
              <section className="mypage-contents-posts">
              내가 쓴 글들
              </section>}
              {isCommentsView &&
              <section className="mypage-contents-comments">
              내가 쓴 댓글들
              </section>}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <section className="mypage-info">
                <h6>내 정보</h6>
                <div className="mypage-info-item mypage-info-account">
                  <div>계정정보</div>
                  <div className="mypage-info-account-email">
                    <div>
                      <img src="static/icons/icon_kakao_simple.svg" alt="카카오" />
                    </div>
                    {userInfo.email}
                  </div>
                </div>
                <div className="mypage-info-item">
                  <button onClick={handleSignOut}>로그아웃</button>
                </div>
                <div className="mypage-info-item">
                  <button>회원탈퇴</button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPage;
