import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuItem {
  title: string;
  path?: string;
}

export interface BreadcrumbState {
  mainMenu: MenuItem | null;
  subMenu: MenuItem | null;
  childMenu: MenuItem | null;
  extraTitle: string | null;
}

const initialState: BreadcrumbState = {
  mainMenu: null,
  subMenu: null,
  childMenu: null,
  extraTitle: null,
};

const breadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState,
  reducers: {
    setMainMenu: (state, action: PayloadAction<MenuItem>) => {
      state.mainMenu = action.payload;
      state.subMenu = null;
      state.childMenu = null;
    },

    setSubMenu: (state, action: PayloadAction<MenuItem>) => {
      state.subMenu = action.payload;
      state.childMenu = null;
    },

    setChildMenu: (state, action: PayloadAction<MenuItem>) => {
      state.childMenu = action.payload;
    },

    setExtraTitle: (state, action: PayloadAction<string>) => {
      state.extraTitle = action.payload;
    },

    resetBreadcrumb: (state) => {
      state.mainMenu = null;
      state.subMenu = null;
      state.childMenu = null;
      state.extraTitle = null;
    },
  },
});

export const {
  setMainMenu,
  setSubMenu,
  setChildMenu,
  setExtraTitle,
  resetBreadcrumb,
} = breadcrumbSlice.actions;

export default breadcrumbSlice.reducer;
