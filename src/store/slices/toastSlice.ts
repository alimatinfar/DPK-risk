import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToastWithPosition } from "../../components/Toast/ToastContainer.types";
export interface ToastState {
  toasts: ToastWithPosition[];
}

const initialState: ToastState = {
  toasts: [],
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<ToastWithPosition>) => {
      state.toasts.push(action.payload);
    },

    removeToast: (state, action: PayloadAction<string | number>) => {
      state.toasts = state.toasts.filter(
        (toast) => toast.id !== action.payload
      );
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;

export default toastSlice.reducer;
