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
    email: string,
    avatar: string,
    nickname: string,
  },
  createdAt: Date,
  updatedAt: Date,
  transportation: string,
  region: string,
  text: string,
  images: ImageProps[] | [],
  likeCount: number,
  comments: {
    count: number,
    contents: string[] | [],
  },
}

function PostList() {
  const dummyPosts: PostProps[] | [] = [
    {
      id: 1,
      user: {
        id: 1,
        email: 'test@email.com',
        avatar: 'image',
        nickname: 'nickname',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      transportation: '지하철',
      region: '서울',
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
      likeCount: 3,
      comments: {
        count: 2,
        contents: [],
      },
    },
  ];

  const [posts, setPosts] = useState<PostProps[]>(dummyPosts);

  useEffect(() => {
    const a = async () => {
      const newPosts = await getPosts({
        start: 0,
        size: 10,
        sorting: 'likeCount',
      });
      if (newPosts) {
        setPosts(newPosts);
      }
    };

    a();
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
