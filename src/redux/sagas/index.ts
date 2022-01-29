import axios from 'axios';
// import { all, fork } from 'redux-saga/effects';

// import userSaga from './user';

axios.defaults.baseURL = 'http://3.37.182.59:8080/api';

export default function* rootSaga() {
//   yield all([fork(userSaga)]);
}
