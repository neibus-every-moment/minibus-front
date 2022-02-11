import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import Bingo from './Bingo';
import Home from './Home';
import MyPage from './MyPage';
import PostCreate from './PostCreate';
import Report from './Report';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write/*" element={<PostCreate />} />
        <Route path="/bingo" element={<Bingo />} />
        <Route path="/report/*" element={<Report />} />
        <Route path="/mypage/" element={<MyPage />} />
      </Routes>
      <NavigationBar />
    </>
  );
}

export default App;
