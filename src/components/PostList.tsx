import React, { useEffect, useState } from 'react';

import PostItem from './PostItem';

export interface ImageProps {
  id: number,
  url: string
}

export interface PostProps {
  id: number,
  user: {
    avatar: string,
    nickname: string,
  },
  createdAt: Date,
  updatedAt: Date,
  transportations: string[],
  regions: string[],
  content: {
    text: string,
    images: ImageProps[] | [],
  },
  likeCount: number,
  commentCount: number,
}

function PostList() {
  const dummyPosts: PostProps[] | [] = [
    {
      id: 1,
      user: {
        avatar: 'image',
        nickname: 'nickname',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      transportations: ['지하철', '버스'],
      regions: ['서울', '인천'],
      content: {
        text: '글 내용이라네~',
        images: [
          {
            id: 1,
            url: `https://picsum.photos/800?random=${Math.random()}`,
          },
          {
            id: 2,
            url: `https://picsum.photos/800?random=${Math.random()}`,
          },
          {
            id: 3,
            url: `https://picsum.photos/800?random=${Math.random()}`,
          },
          {
            id: 4,
            url: `https://picsum.photos/800?random=${Math.random()}`,
          },
        ],
      },
      likeCount: 3,
      commentCount: 5,
    },
    {
      id: 2,
      user: {
        avatar: 'image',
        nickname: 'nickname',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      transportations: ['지하철', '버스'],
      regions: ['서울', '인천'],
      content: {
        text: '글 내용이라네~',
        images: [
          {
            id: 1,
            url: `https://picsum.photos/800?random=${Math.random()}`,
          },
          {
            id: 2,
            url: `https://picsum.photos/800?random=${Math.random()}`,
          },
          {
            id: 3,
            url: `https://picsum.photos/800?random=${Math.random()}`,
          },
        ],
      },
      likeCount: 3,
      commentCount: 5,
    },
  ];
  const [posts, setPost] = useState<PostProps[]>([
    {
      id: 0,
      user: {
        avatar: 'image',
        nickname: 'nickname',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      transportations: [],
      regions: [],
      content: {
        text: '',
        images: [],
      },
      likeCount: 0,
      commentCount: 0,
    },
  ]);

  useEffect(() => {
    setPost(dummyPosts);
    // TODO: 게시글 가져오기 요청
  }, []);

  return (
    <>
      {
        posts.map(post => (
          <div className="row" key={post.id}>
            <div className="col-sm-4">
              <PostItem post={post} />
            </div>
          </div>
        ))
      }
    </>
  );
}

export default PostList;
