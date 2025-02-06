import { configureStore} from '@reduxjs/toolkit';
import Canvazoomslice from "./Canva/canvazoom/Canvazoomslice"

export const store = configureStore({
    reducer: {
        canvazoom:Canvazoomslice
    },
    middleware:( getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false,
    }),
})