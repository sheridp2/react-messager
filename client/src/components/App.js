import React from 'react'
import Login from './Login'
import useLocalStorage from '../hooks/useLocalStorage'
import Dashboard from './Dashboard'

function App() {
  const[id, setId] = useLocalStorage()

  return (
    <div>
      {id ? <Dashboard id={id} /> : <Login onIdSubmit={setId}/>}
    </div>
  );
}

export default App;
