import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import toastReducer from "./slices/toastSlice";
import breadcrumbReducer from "./slices/breadcrumbSlice";
import darkmodeSlice from "./slices/darkmodeSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    toast: toastReducer,
    breadcrumb: breadcrumbReducer,
    darkmode: darkmodeSlice,
  },
});



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch