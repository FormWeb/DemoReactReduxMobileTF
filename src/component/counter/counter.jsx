import { useDispatch, useSelector } from "react-redux"
import { counterDecrementation, counterIncrementation, counterReset } from "../../store/action/counter-action"

const Counter = (props) => {

    const { incr } = props

    const counter = useSelector(state => state.counter.value)

    const dispatch = useDispatch()

    return (
        <>
            <h1>Valeur : {counter}</h1>
            <button onClick={() => dispatch(counterIncrementation(incr))}>+</button>
            <button onClick={() => dispatch(counterDecrementation(incr))}>-</button>
            <button onClick={() => dispatch(counterReset())}>Reset</button>
        </>
    )
}

export default Counter