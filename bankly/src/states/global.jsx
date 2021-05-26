import { createSlice, configureStore } from '@reduxjs/toolkit'

const rootReducer = createSlice({
  name: 'counter',
  initialState: {
    view: "welcome"
  },
  reducers: {
    to_welcome: state => {
      state.view = "welcome"
    },
    to_second: state => {
      state.view = "second"
    },
    to_any: (state, action) => {
      state.view = action.payload
    }
  }
})

export const { to_welcome, to_second, to_any } = rootReducer.actions

export const store = configureStore({
  reducer: rootReducer.reducer
})

export default rootReducer.reducer;
