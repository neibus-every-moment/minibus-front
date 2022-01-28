import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../components/Header';
import PostCreate from '../components/PostCreate';
import Bingo from './Bingo';
import Home from './Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<PostCreate />}></Route>
        <Route path="/bingo" element={<Bingo />} />
      </Routes>
    </>
  );
}

export default App;
