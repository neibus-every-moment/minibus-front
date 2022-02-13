import React from 'react';

import { PostProps } from '../routes/Home';
import PostItem from './PostItem';

function PostList({ posts }: { posts: PostProps[] }) {
  return (
    <>
      {
        posts?.map(post => (
          <div className="row post-item" key={post.id}>
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
