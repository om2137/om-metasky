import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth';
import userDataReducer from './userData';

const rootReducer = combineReducers({
  auth: authReducer,
  userData: userDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
