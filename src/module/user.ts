import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// initial type
export interface UserState {
  userLoading: boolean;
  userData: any;
  error: any;
}

// action payload type
// maybe remove after
// export type LoginPayload = {
//   userId: string;
//   password: string;
// };

const initialState: UserState = {
  userLoading: false,
  userData: null,
  error: null,
};

// reducer slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Login
    loginRequest(state: UserState) {
      state.userLoading = true;
      state.error = null;
    },
    loginSuccess(state: UserState, action: PayloadAction<any>) {
      state.userLoading = false;
      state.userData = action.payload;
    },
    loginFailure(state: UserState, action: PayloadAction<{ error: any }>) {
      state.userLoading = false;
      state.error = action.payload;
    },

    // Logout
    logoutRequest(state: UserState) {
      state.userLoading = true;
      state.error = null;
    },
    logoutSuccess(state: UserState) {
      state.userLoading = false;
      state.userData = null;
    },
    logoutFailure(state: UserState, action: PayloadAction<{ error: any }>) {
      state.userLoading = false;
      state.error = action.payload;
    },
  },
});

// reducer & action
const { reducer, actions } = userSlice;
export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} = actions;
export default reducer;
