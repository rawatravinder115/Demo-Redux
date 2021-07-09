// import { createStore } from "redux";

import { createSlice, configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter';
import authReducer from './Auth';

// const initialCounterState = { counter: 0, showCounter: true };

/// without Reduc-toolkot

// const counterReducer = (state = intialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };

//     // the dispatch should have all the element in the new state bcoz it override the prev one.

//     // never change the existing state ,simply override it with new bcoz it leads to unpredictible behaviour.
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// with redux-toolkit

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialCounterState,
//   reducers: {
//     // here we done direct manupulation of state which is not good but redux toolkit by deafult
//     increment(state) {
//       // use another library to override the changes .
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     }
//   }
// });

// const initialAuthState ={
//     isAuthenticated: false
// }

// const authSlice = createSlice({
//     name: "authentication",
//     initialState: initialAuthState,
//     reducers:{
//         login(state){
//             state.isAuthenticated = true;
//         },
//         logout(state) {
//             state.isAuthenticated = false;
//         },
//     },
// });

// const store = createStore(counterSlice.reducer);

const store = configureStore({
//   reducer: counterSlice.reducer
  reducer: {counter : counterReducer ,auth: authReducer} // for multiple slice map of slice.
});

// configureStore merge the multiple slice to one Slice

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;
export default store;
