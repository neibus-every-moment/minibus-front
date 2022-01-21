import React, { useState } from 'react';

import PostItem from './PostItem';

function PostList() {
  const [posts, setPost] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

  return (
    <>
      {
        posts.map(post => (
          <div className='row' key={post}>
            <div className='col-sm-4'>
              <PostItem/> {/*TODO: lint 룰 추가*/}
            </div>
          </div>
        ))
      }
    </>
  );
}

export default PostList;
