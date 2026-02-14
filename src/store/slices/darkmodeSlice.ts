import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DarkmodeState {
  dark: boolean;
}

const getInitialDarkMode = (): boolean => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("darkMode") === "true";
};

const initialState: DarkmodeState = {
  dark: getInitialDarkMode(),
};

const darkmodeSlice = createSlice({
  name: "dark",
  initialState,
  reducers: {
    setDarkmode: (state, action: PayloadAction<boolean>) => {
      state.dark = action.payload;
      localStorage.setItem("darkMode", action.payload.toString());
    },
  },
});

export const { setDarkmode } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
