import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import PostCreate from '../components/PostCreate';
import Bingo from './Bingo';
import Home from './Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<PostCreate />} />
        <Route path="/bingo" element={<Bingo />} />
      </Routes>
      <NavigationBar />
    </>
  );
}

export default App;
