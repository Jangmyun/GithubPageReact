import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers : {
        increment: (state) => {
            state.value += 1  // return statement가 필요없음
        },
        decrement : (state)=> {
            state.value -= 1
        },
        incrementByAmount : (state, action) => {
            state.value += action.payload  // action 매개변수를 사요하려면 action.payload 형태로 사용해야함
        },
    },
})

// action creator are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer
