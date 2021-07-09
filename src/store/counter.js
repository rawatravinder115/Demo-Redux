import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
      // here we done direct manupulation of state which is not good but redux toolkit by deafult
      increment(state) {
        // use another library to override the changes .
        state.counter++;
      },
      decrement(state) {
        state.counter--;
      },
      increase(state, action) {
        state.counter = state.counter + action.payload;
      },
      toggleCounter(state) {
        state.showCounter = !state.showCounter;
      }
    }
  });

  export const counterActions = counterSlice.actions;

  export default counterSlice.reducer;