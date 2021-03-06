import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  category: '',
  content: '',
  isPush: 0
}

const submitSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeTitle(state, action: PayloadAction<any>) {
      state.title = action.payload.title
    },
    changeCategory(state, action: PayloadAction<any>) {
      state.category = action.payload.category
    },
    changeContent(state, action: PayloadAction<any>) {
      state.content = action.payload.content
    },
    changePush(state, action: PayloadAction<any>) {
      state.isPush = action.payload.isPush
    },
    changeData(state, action: PayloadAction<any>) {
      state = Object.assign(state, {
        title: action.payload.title,
        category: action.payload.category,
        content: action.payload.content,
        isPush: action.payload.isPush
      })
    },
  },
})

export const { changeTitle, changeCategory, changeContent, changePush, changeData } = submitSlice.actions
export const getDate = (state: any) => state.SubmitReducer
export default submitSlice.reducer
