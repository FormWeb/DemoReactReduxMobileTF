import { useSelector } from "react-redux"

const PokemonDetail = () => {

    const pokemon = useSelector(state => state.pokemon)

    return (
        <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image}></img>
        </>
    )
}

export default PokemonDetail