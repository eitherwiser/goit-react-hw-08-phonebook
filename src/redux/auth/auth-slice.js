import { createSlice } from '@reduxjs/toolkit';
//import { getUserName, getToken } from 'redux/auth/auth-selectors';

import { register, logIn, logOut, fetchCurrentUser } from './auth-operations';
//

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  getFetchCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.pending](state) {
      state.getFetchCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.getFetchCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.getFetchCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
