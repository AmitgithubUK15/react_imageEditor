import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 imagesrc:null
};

const DragDropSlice = createSlice({
    name:"drag&drop",
    initialState,
    reducers:{
        dragStart :(state,action)=>{
         let imgsrc = action.payload.target.src;
         action.payload.dataTransfer.setData("text",imgsrc);
        },
    }
})

export const {dragStart} = DragDropSlice.actions;
export default DragDropSlice.reducer;