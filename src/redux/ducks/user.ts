import { AxiosError, AxiosResponse } from 'axios';
import { ActionType, createAsyncAction, createReducer } from 'typesafe-actions';

import { userState } from '../../typings/user';

export const initialState:userState = {
  id: null,
  nickname: null,
  Posts: [],
  Comments: [],
  spinner: false,
  systemMessage: null,
};

export const LOG_IN_REQUEST = 'minibus/UserInfo/LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'minibus/UserInfo/LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'minibus/UserInfo/LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'minibus/UserInfo/LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'minibus/UserInfo/LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'minibus/UserInfo/LOG_OUT_FAILURE';

export const SIGN_UP_FAILURE = 'minibus/UserInfo/SIGN_UP_FAILURE';
export const SIGN_UP_SUCCESS = 'minibus/UserInfo/SIGN_UP_SUCCESS';
export const SIGN_UP_REQUEST = 'minibus/UserInfo/SIGN_UP_REQUEST';

export const LogInHandler = createAsyncAction(
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE
)<null, AxiosResponse<userState>, AxiosError>();
//순서대로 request 요청시 넘어오는 payload의 타입 , 요청 성공 시 반환 값, 요청 실패 시 반환값

export const LogOutHandler = createAsyncAction(
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE
)<null, AxiosResponse<userState>, AxiosError>();

export const SignUpHandler = createAsyncAction(
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
)<null, AxiosResponse<userState>, AxiosError>();

const actions = {
  LogInHandler,
  LogOutHandler,
  SignUpHandler,
};

export type UserAction = ActionType<typeof actions>

const userReducer = createReducer<userState, UserAction>(initialState, {
  [LOG_IN_REQUEST]: (state) => ({
    ...state,
    spinner: true,
  }), //request 액션은 action.data대신 action.payload를 받습니다.
  [LOG_IN_SUCCESS]: (state, { payload }) => ({ //action.payload 객체 구조 분해
    ...state,
    id: payload.data.id,
    nickname: payload.data.nickname,
    spinner: false,
    systemMessage: null,
  }), //success가 되면 action.payload.data로 응답 결과가 저장되어 옵니다.
  [LOG_IN_FAILURE]: (state, { payload: error }) => ({
    ...state,
    spinner: false,
    systemMessage: error.message,
  }), //failure가 되면 action.payload.message로 오류 메세지를 읽습니다.
  [LOG_OUT_REQUEST]: (state) => ({
    ...state,
    spinner: true,
  }),
  [LOG_OUT_SUCCESS]: () => ({
    ...initialState,
  }),
  [LOG_IN_FAILURE]: (state, { payload: error }) => ({
    ...state,
    spinner: false,
    systemMessage: error.message,
  }),
  [SIGN_UP_REQUEST]: (state) => ({
    ...state,
    spinner: true,
  }),
  [SIGN_UP_SUCCESS]: (state, { payload }) => ({
    ...state,
    spinner: false,
    systemMessage: payload.data.systemMessage,
  }),
  [SIGN_UP_FAILURE]: (state, { payload: error }) => ({
    ...state,
    spinner: false,
    systemMessage: error.message,
  }),
});

export default userReducer;
