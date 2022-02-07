import React, { useEffect, useState } from 'react';

import { getPosts } from '../apis/post';
import PostItem from './PostItem';

export interface ImageProps {
  id: number,
  url: string
}

export interface PostProps {
  id: number,
  user: {
    id: number,
    avatar: string,
    nickname: string,
  },
  createdAt: Date,
  updatedAt: Date,
  transportations: string[],
  regions: string[],
  contents: {
    text: string,
    images: ImageProps[] | [],
  },
  like: {
    count: number,
    users: number[],
  },
  comments: {
    count: number,
    contents: {
      id: number,
      text: string
    }[],
  },
}

function PostList() {
  const dummyPosts: PostProps[] | [] = [
    {
      id: 1,
      user: {
        id: 1,
        avatar: 'image',
        nickname: 'nickname',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      transportations: ['지하철', '버스'],
      regions: ['서울', '인천'],
      contents: {
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
      like: {
        count: 3,
        users: [1, 2, 3],
      },
      comments: {
        count: 2,
        contents: [
          {
            id: 1,
            text: '댓글 1',
          },
          {
            id: 2,
            text: '댓글 2',
          },
        ],
      },
    },
  ];

  const [posts, setPosts] = useState<PostProps[]>(dummyPosts);

  useEffect(() => {
    const newPosts = getPosts({ start: 0, size: 10, sorting: 'likeCount' });
    // setPosts(newPosts);
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
