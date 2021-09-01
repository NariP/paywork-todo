import { call, put, takeLatest } from 'redux-saga/effects';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} from 'module/user';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../../fBase';
import { UserCredential } from '@firebase/auth-types';

const loginAPI = () => {
  return signInWithPopup(auth, googleProvider);
};

// execute Saga function
const login = function* () {
  try {
    const res: UserCredential = yield call(loginAPI);
    yield put(loginSuccess(res));
  } catch (error: any) {
    yield put(loginFailure(error));
  }
};

const logout = function* () {
  try {
    yield signOut(auth);
    yield put(logoutSuccess());
  } catch (error: any) {
    yield put(logoutFailure(error));
  }
};

// Watch 함수
export function* watchLogin() {
  yield takeLatest(loginRequest.type, login);
}

export function* watchLogout() {
  yield takeLatest(logoutRequest.type, logout);
}
