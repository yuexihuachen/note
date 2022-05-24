import { configureStore } from '@reduxjs/toolkit';
import { categoryApi } from './services/category';
import searchReducer from '../features/header/headerSlice'

const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    searchReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(categoryApi.middleware),
});

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

//https://codesandbox.io/s/rtk-query-demo-lbp7n?from-embed=&file=/src/app/services/split/posts.ts
//https://codesandbox.io/s/github/reduxjs/redux-toolkit/tree/master/examples/query/react/basic?from-embed=&file=/src/test/server/index.ts