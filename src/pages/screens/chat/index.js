import { useState } from 'react'

// COMPONENTS
import Chats from './chats'
import Room from './room'

export default function Chat() {
  const [page, setPage] = useState('chats')
  return (
    <>
      {page === 'chats' ? (
        <Chats setPage={setPage} />
      ) : (
        <Room setPage={setPage} />
      )}
    </>
  )
}
