import { createReducer } from "@reduxjs/toolkit"
import { counterDecrementation, counterIncrementation, counterReset } from "../action/counter-action"

const initialState = {
    value: 0
}

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(counterIncrementation, (state, action) => {
            console.log(action.payload)
            state.value = state.value + action.payload
        })
        .addCase(counterDecrementation, (state, action) => {
            state.value = state.value - action.payload
        })
        .addCase(counterReset, (state) => {
            state.value = 0
        })
})