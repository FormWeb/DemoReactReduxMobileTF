import { useState } from "react"
import { useDispatch } from "react-redux"
import { getPokemon } from "../../store/action/pokemon-action"

const SearchPokemon = () => {

    const [pokemonName, setPokemonName] = useState("")

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(getPokemon(pokemonName))
    }

    return (
        <>
            <input type="text" value={pokemonName} onChange={e => setPokemonName(e.target.value)}/>
            <button onClick={handleClick}>Search</button>
        </>
    )
}

export default SearchPokemon