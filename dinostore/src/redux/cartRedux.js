import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    dinos: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addDinosaur: (state, action) => {
      state.quantity += 1;
      state.dinos.push(action.payload);
      state.total += action.payload.price * action.payload.quantity; //configuring price
    },
  },
});

export const { addDinosaur } = cartSlice.actions;
export default cartSlice.reducer;
