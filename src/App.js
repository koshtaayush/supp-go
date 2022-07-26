import { Suspense } from 'react';
import './App.css';
import Signin from './components/Signin'

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <Signin />
      </header>
    </div>
  );
}

export default App;
