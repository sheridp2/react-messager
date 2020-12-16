import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ConversationsContext = React.createContext()

export function useConversations() {
  return useContext(ConversationsContext)
}

export function ConversationsProvider({ children }) {
  const [converstations, setConversations] = useLocalStorage('converstations', [])

  function createConversation(recipients) {
    setConversations(prevConverations => {
      return [...prevConverations, { recipients, messages: [] }]
    })
  }

  return (
    <ConversationsContext.Provider value={{ converstations, createConversation }}>
      {children}
    </ConversationsContext.Provider>
  )
}
