import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calculate, getAnswer } from "../../utils/calculator";

export interface CalculatorState{
  result:string,  // 화면에 출력되고있는 결과
}
export const initialState:CalculatorState = {
  result: ""
}
export const calculatorSlice = createSlice({
  name:"CALCULATOR",
  initialState,
  reducers:{
    // allClear: "AC" -> 전체 삭제
    allClear: (state: CalculatorState) => {
      state.result = ""
    },
    // delete: "DEL" -> 하나만 삭제
    delete: (state: CalculatorState) => {
      state.result = state.result.substring(0, state.result.length-1)
    },
    // setResult: "=" -> 계산 결과
    setResult:(state: CalculatorState) => {
      state.result = getAnswer(state.result)
    },
    // addResult: 0~9, +, -, /, %, ^, . -> 숫자/연산자 추가
    addResult:(state: CalculatorState, action:PayloadAction<string>) => {
      state.result += action.payload
    }
  }
})
export const {
  actions: calculatorSliceActions,
  reducer: calculatorSliceReducers,
} = calculatorSlice
export default calculatorSlice