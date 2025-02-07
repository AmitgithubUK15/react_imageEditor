import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    canvazoomlevel:1,
}

const Canvazoomslice = createSlice({
    name:"canvazoom",
    initialState,
    reducers:{
        CanvaZoomIn:(state) =>{
         state.canvazoomlevel = Math.min(state.canvazoomlevel + 0.1, 15);
        },

        CanvaZoomOut: (state)=>{
        if(state.canvazoomlevel !== 0){
            state.canvazoomlevel = Math.min(state.canvazoomlevel - 0.1, 15);
        }
        },

        onchangeCanvazoom: (state,action)=>{
            // if(state.canvazoomlevel !== 0){
                state.canvazoomlevel = parseInt(action.payload);
            // }
        }
    }
})

export const {CanvaZoomIn,CanvaZoomOut,onchangeCanvazoom} = Canvazoomslice.actions;
export default Canvazoomslice.reducer;

