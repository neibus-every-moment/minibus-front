
import React from 'react';
import { Navigate } from 'react-router-dom';

import { getAuthState } from '../utils/hasAuth';


function PrivateRoute({ children }: {children: React.ReactNode}) {
  const auth = getAuthState();
  return (
    <>
      {auth || alert('로그인이 필요합니다.')}
      {auth
        ? children
        : <Navigate to="/login" />
      }
    </>
  );
}

export default PrivateRoute;
