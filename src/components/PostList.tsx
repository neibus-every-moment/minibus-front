import React from 'react';

import { PostProps } from '../routes/Home';
import PostItem from './PostItem';

function PostList({ posts, setCurrentPage }: {
    posts: PostProps[],
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  }) {
  return (
    <>
      {
        posts?.map(post => (
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
