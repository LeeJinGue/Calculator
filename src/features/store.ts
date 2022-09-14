import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "./calculator/calculatorSlice";
import { postSlice } from "./post/postSlice";

export function makeStore(){
  return configureStore({
    reducer: {
      [postSlice.name] : postSlice.reducer,
      [calculatorSlice.name] : calculatorSlice.reducer,
  },
})
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store