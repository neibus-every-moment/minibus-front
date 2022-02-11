import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import Bingo from './Bingo';
import Home from './Home';
import Login from './Login';
import MyPage from './MyPage';
import PostCreate from './PostCreate';
import PrivateRoute from './PrivateRoute';
import Report from './Report';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/write/*"
          element={
            <PrivateRoute>
              <PostCreate />
            </PrivateRoute>
          }
        />
        <Route path="/bingo" element={<Bingo />} />
        <Route path="/report/*" element={<Report />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <NavigationBar />
    </>
  );
}

export default App;
