import React from 'react'
import Login from './Login'
import useLocalStorage from '../hooks/useLocalStorage'
import Dashboard from './Dashboard'
import { ContactsProvider } from '../context/ContactsProvider'
import { ConversationsProvider } from '../context/ConversationsProvider'
import { SocketProvider } from '../context/SocketProvider'

function App() {
  const[id, setId] = useLocalStorage()

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  return (
    <div>
      {id ? dashboard : <Login onIdSubmit={setId}/>}
    </div>
  );
}

export default App;
