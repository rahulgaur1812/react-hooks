import './App.css';
import UseEffect2Hook from './components/useEffect2Hook';
import UseEffecthook from './components/useEffectHook';
import UseStateHook from './components/useStateHook';

function App() {
  return (
    <>
      <h1>Usestate Hook</h1>
      <UseStateHook />
      <h1>UseEffect hook Example 1</h1>
      <UseEffect2Hook />
      <h1>UseEffect hook Example 2</h1>
      <UseEffecthook />
    </>
  );
}

export default App;
