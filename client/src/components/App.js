import React from 'react'
import Login from './Login'
import useLocalStorage from '../hooks/useLocalStorage'
import Dashboard from './Dashboard'
import { ContactsProvider } from '../context/ContactsProvider'

function App() {
  const[id, setId] = useLocalStorage()

  const dashboard = (
      <ContactsProvider>
        <Dashboard id={id} />
      </ContactsProvider>
  )

  return (
    <div>
      {id ? dashboard : <Login onIdSubmit={setId}/>}
    </div>
  );
}

export default App;
