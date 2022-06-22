
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

export const store = configureStore({
    reducer: rootReducer,
    // devTools: true,
});

// import { configureStore } from '@reduxjs/toolkit'
// import movieReducer from './movieSlice'

// export default configureStore({
//   reducer: {
//       reducer: movieReducer,
//   },
// })



