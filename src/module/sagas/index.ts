import { all, fork } from 'redux-saga/effects';
import { watchLogin, watchLogout } from './userSaga';

export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchLogout)]);
}
