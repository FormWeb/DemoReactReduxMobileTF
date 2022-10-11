import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPokemon = createAsyncThunk(
    "pokemon/get",
    async (pokemonName, thunkApi) => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
        const pokemon = await response.json()
        const newPokemon = {
            name: pokemon.name,
            image: pokemon.sprites.front_default
        }
        return newPokemon
    }
)