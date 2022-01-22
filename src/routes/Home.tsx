import React, { useState } from 'react';

import OrderSelector from '../components/OrderSelector';
import PostList from '../components/PostList';
import TagList from '../components/TagList';
import WriteButton from '../components/WriteButton';

function Home() {
  const [list, setList] = useState([
    '지하철',
    '버스',
    '택시',
    '기타교통수단',
    '지하철',
    '버스',
    '택시',
    '기타교통수단',
  ]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <TagList list={list} />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <TagList list={list} />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <OrderSelector />
        </div>
      </div>

      <PostList />

      <div className="write_btn">
        <WriteButton />
      </div>

    </div>
  );
}

export default Home;

