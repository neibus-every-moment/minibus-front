import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Board from './Board';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Board />} />
      </Routes>
    </>
  );
};

export default App;
