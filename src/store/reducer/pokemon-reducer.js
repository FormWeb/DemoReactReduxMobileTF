import { createReducer } from "@reduxjs/toolkit"
import { getPokemon } from "../action/pokemon-action"

const initialState = {
    name: "Type a pokemon !",
    image: ""
}

export const pokemonReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getPokemon.fulfilled, (state, action) => {
            return {
                name: action.payload.name,
                image: action.payload.image
            }
        })
        .addCase(getPokemon.rejected, (state, action) => {
            return {
                name: "Error",
                image: ""
            }
        })
        .addCase(getPokemon.pending, (state, action) => {
            return {
                name: "Loading",
                image: ""
            }
        })
})