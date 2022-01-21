import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../components/Header';
import PostCreate from '../components/PostCreate';
import Home from './Home';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/write' element={<PostCreate />}></Route>
      </Routes>
    </>
  );
}

export default App;
