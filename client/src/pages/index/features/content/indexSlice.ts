import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store' 

// Define a type for the slice state
interface ContentState {
  content: string
}

interface IResult {
  content: string
}

// Define the initial state using that type
const initialState: ContentState = {
  content: ''
}

export const articleSlice = createSlice({
  name: 'article',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeContent: (state, action: PayloadAction<IResult>) => {
      state.content = action.payload.content
    }
  },
})

export const { changeContent } = articleSlice.actions

export const getArticle = (state: RootState) => state.articleReducer.content

export default articleSlice.reducer