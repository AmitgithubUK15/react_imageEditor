import { configureStore} from '@reduxjs/toolkit';
import Canvazoomslice from "./Canva/canvazoom/Canvazoomslice"
import DragDropSlice from "./Canva/Drag&Drop/DragDropSlice";

export const store = configureStore({
    reducer: {
        canvazoom:Canvazoomslice,
        dragdrop:DragDropSlice
    },
    middleware:( getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false,
    }),
})