import {
  all,
  call,
  delay,
  fork,
  put,
  takeLatest } from '@redux-saga/core/effects';
import axios, { AxiosResponse } from 'axios';

import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS } from '../ducks/user';

function logInAPI(data:any):Promise<AxiosResponse> {
  return axios.post('/user/login', data);
}

function* logIn(action:any) {
  //LOG_IN_REQUEST에서 리턴되는 객체를 받아옴
  try {
    const result: AxiosResponse = yield call(logInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS, //다시 그냥 리덕스쪽으로 액션이 넘어감
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function logOutAPI() {
  return axios.post('/user/logout');
}

function* logOut() {
  try {
    // yield call(logOutAPI);
    yield delay(1000);
    console.log('로그아웃');
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOG_OUT_FAILURE,
    });
  }
}

function signUpAPI(data:any) {
  return axios.post('/user', data);
}

function* signUp(action:any) {
  try {
    yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: SIGN_UP_FAILURE,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
  ]);
}

