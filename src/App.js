import logo from './logo.svg';
import './App.css';
import Task1useMemo from './ReactHooksTask/Task1useMemo';
import Task2useCallback from './ReactHooksTask/Task2useCallback';

function App() {
  return (
    <>
    <div className='App'>
    <h1>Task1: useMemo Hook</h1>
    <Task1useMemo/>
    <hr/>
    <h2>Task2 : useCallback Hook</h2>
    <Task2useCallback/>
    </div>

    </>
  );
}

export default App;
