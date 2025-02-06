import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    canvazoomlevel:1,
}

const Canvazoomslice = createSlice({
    name:"canvazoom",
    initialState,
    reducers:{
        CanvaZoomIn:(state) =>{
         state.canvazoomlevel = Math.min(state.canvazoomlevel + 0.1, 2);
        },

        CanvaZoomOut: (state)=>{
         state.canvazoomlevel = Math.min(state.canvazoomlevel - 0.1, 2);
        }
    }
})

export const {CanvaZoomIn,CanvaZoomOut} = Canvazoomslice.actions;
export default Canvazoomslice.reducer;

