import './App.css';
import UseEffect2Hook from './components/useEffect2Hook';
import UseEffecthook from './components/useEffectHook';
import UseMemoHook from './components/useMemohook';
import UseRefHook from './components/useRefHook';
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
      <h1>Usememo hook example</h1>
      <UseMemoHook />
      <h1>UseRefHook hook Example</h1>
      <UseRefHook />
    </>
  );
}

export default App;
