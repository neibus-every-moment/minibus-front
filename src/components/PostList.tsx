import React, { useState } from 'react';

import PostItem from './PostItem';

function PostList() {
  const [posts, setPost] = useState([...Array(15)].map((v, i) => i));

  return (
    <>
      {
        posts.map(post => (
          <div className="row" key={post}>
            <div className="col-sm-4">
              <PostItem /> {/*TODO: lint 룰 추가*/}
            </div>
          </div>
        ))
      }
    </>
  );
}

export default PostList;
