import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { demoAction, demoActionReset } from './store/action/demo-action';
import Counter from './component/counter/counter';
import Pokemon from './component/pokemon/pokemon';

function App() {

  // Pour executer les actions du store
  const dispatch = useDispatch()

  // Pour récupérer les valeur du store
  const demoText = useSelector(state => state.demo.text)

  const handleAction = () => {
    dispatch(demoAction({
      text1: "Bonjour",
      text2: "Ca va ?"
    }))
  }

  const handleReset = () => {
    dispatch(demoActionReset())
  }

  return (
    <div className="App">
      {/* <h1>{demoText}</h1>
      <button onClick={handleAction}>Make an action</button>
      <button onClick={handleReset}>Reset my action !</button> */}
      {/* <Counter incr={1}/>
      <Counter incr={5}/> */}
      <Pokemon/>
    </div>
  );
}

export default App;
