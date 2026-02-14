import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  value: number;
  customerType: string | null;
}

const initialState: UserState = {
  value: 0,
  customerType: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCustomerType: (state, action: PayloadAction<string | null>) => {
      state.customerType = action.payload;
    },
  },
});

export const { setCustomerType } = userSlice.actions;

export default userSlice.reducer;
