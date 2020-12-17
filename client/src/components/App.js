import React from 'react'
import Login from './Login'
import useLocalStorage from '../hooks/useLocalStorage'
import Dashboard from './Dashboard'
import { ContactsProvider } from '../context/ContactsProvider'
import { ConversationsProvider } from '../context/ConversationsProvider'

function App() {
  const[id, setId] = useLocalStorage()

  const dashboard = (
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
  )

  return (
    <div>
      {id ? dashboard : <Login onIdSubmit={setId}/>}
    </div>
  );
}

export default App;
