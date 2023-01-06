import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "../slices/search";

const initialState = {};
const rootReducer = combineReducers({ 
  searchReducer: searchReducer 
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  preloadedState: initialState,
  enhancers: defaultEnhancers => [...defaultEnhancers]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;