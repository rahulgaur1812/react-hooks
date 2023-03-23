import './App.css';
import UseEffect2Hook from './components/useEffect2Hook';
import UseEffecthook from './components/useEffectHook';
import UseMemoHook from './components/useMemohook';
import UseRefHook from './components/useRefHook';
import UseStateHook from './components/useStateHook';
import MainPage from './components/useContextHook/mainPage';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './components/useContextHook2/Main';
import UseReducerHook from './components/useReducerHook';
import UseCallbackHook from './components/useCallbackHook/useCallbackHook';
import CustomHook from './components/customHook/customHook';
import UseLayoutEffectHook from './components/useLayoutEffectHook';
import UseTransitionHook from './components/usetransitionHook';
import List from './components/useDeferredValueHook';
import MainApp from './components/useDeferredValueHook/main';

function App() {
  return (
    <Router>

      <Routes>
        <Route exact path="/" element={<UseEffect2Hook />} />
        <Route exact path="/useeffect" element={<UseEffecthook />} />
        <Route exact path="/usememo" element={<UseMemoHook />} />
        <Route exact path="/useref" element={<UseRefHook />} />
        <Route exact path="/useref" element={<UseRefHook />} />
        <Route exact path="/usestate" element={<UseStateHook />} />
        <Route exact path="/usecontext" element={<MainPage />} />
        <Route exact path="/usecontext2" element={<Main />} />
        <Route exact path="/usereducer" element={<UseReducerHook />} />
        <Route exact path="/usecallback" element={<UseCallbackHook />} />
        <Route exact path="/customHook" element={<CustomHook />} />
        <Route exact path="/uselayouteffect" element={<UseLayoutEffectHook />} />
        <Route exact path="/useTransitionHook" element={<UseTransitionHook />} />
        <Route exact path="/usedeferredvaluehook" element={<MainApp />} />
        <Route path="*" element={<UseMemoHook />} />
      </Routes>

    </Router>
  );
}

export default App;
