import logo from './logo.svg';
import './App.css';
import Task1useMemo from './ReactHooksTask/Task1useMemo';
import Task2useCallback from './ReactHooksTask/Task2useCallback';
import CustomHooks from './ReactHooksTask/CustomHooks';
import Task4useReducer from './ReactHooksTask/Task4useReducer';
import Modal from './ReactHooksTask/Modal';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className='App'>
    <h1>Task1: useMemo Hook</h1>
    <Task1useMemo/>
    <hr/>
    <h1>Task2 : useCallback Hook</h1>
    <Task2useCallback/>
    <hr/>
    <h1>Task3: Custom hook</h1>
    <CustomHooks/>
    <hr/>
    <h1>Task4:useReducer</h1>
    <Task4useReducer/>
    <hr/>
    </div>

    </>
  );
}

export default App;
