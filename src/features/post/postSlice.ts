import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface PostData{
  id: number,
  userid: number,
  title:string,
  body:string
}
// 초기 데이터를 fetch해왔다가 추가로 관리?
// localStorage에 저장?
export interface PostState{
  postList: Array<PostData>
}
const initialState:PostData = {
  id: 1,
  userid: 1,
  title:"",
  body:""
}
export const postSlice = createSlice({
  name: 'POST',
  initialState,
  reducers:{
    // 제목, 콘텐트를 받아서 postList에 추가합니다.
    // addNewPost:(state:PostState, action: PayloadAction<PostData>) => {
    //   state.postList.push()
    // },

  }

})

export const {
  actions: postSliceActions,
  reducer: postSliceReducer
} = postSlice
