import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PostItem from '../components/PostItem';
import Board from './Board';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Board />} />
      </Routes>
      <PostItem />
    </>
  );
};

export default App;
