import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrByAmt: (state,action) => {
            state.value += action.payload
        },
    },
})

export const {incrByAmt, increment, decrement} = CounterSlice.actions

export default CounterSlice.reducer