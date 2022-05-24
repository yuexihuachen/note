import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
  articles: []
}

const searchSlice = createSlice({
  name: 'searchNote',
  initialState,
  reducers: {
    changeData(state, action: PayloadAction<any>) {
      state.articles = action.payload.articles
    },
  },
})

export const { changeData } = searchSlice.actions
export const getData = (state: any) => state.searchReducer.articles
export default searchSlice.reducer
