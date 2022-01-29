import {
  all,
  call,
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

function logInAPI(payload:any):Promise<AxiosResponse> {
  return axios.post('/login', payload);
}//any 대신 예상되는 요청 데이터 타입을 명시해주세요

function* logIn(action:any) { //any는 에러 방지용입니다. 아마 action이라는 타입 만들면 될듯?
  try {
    const result: AxiosResponse = yield call(logInAPI, action.payload);
    yield put({
      type: LOG_IN_SUCCESS,
      payload: result.data,
      // payload: { data: { id: 1, nickname: '안녕' } }, //이 형태로 반환해줘야 상태가 반영됩니다.
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function logOutAPI() {
  return axios.post('/logout');
}

function* logOut() {
  try {
    yield call(logOutAPI);
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
}//any 대신 예상되는 요청 데이터 타입을 명시해주세요

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

