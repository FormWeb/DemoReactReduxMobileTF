import { configureStore } from "@reduxjs/toolkit"
import { counterReducer } from "./reducer/counter-reducer"
import { demoReducer } from "./reducer/demo-reducer"
import { pokemonReducer } from "./reducer/pokemon-reducer"

export const store = configureStore({
    reducer: {
        demo: demoReducer,
        counter: counterReducer,
        pokemon: pokemonReducer
    },
    devTools: process.env.NODE_ENV !== "production"
})