import User from '@/types/userTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
      return {
        ...state,
        userData: action.payload,
      };
    },
 },
});

export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;