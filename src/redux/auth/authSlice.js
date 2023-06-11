import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFullfilled = (state, action) => {
  state.token = action.payload.token;
  state.user = action.payload.user;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { email: null, password: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
    isLoading: false,
  },

  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, handleFullfilled)
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, handleFullfilled)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.user = { email: null, password: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
