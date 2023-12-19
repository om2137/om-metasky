
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
}

interface UserDataState {
  userData: User[];
}

const initialState: UserDataState = {
  userData: [],
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User[]>) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
