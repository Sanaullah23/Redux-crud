import React from 'react'
import { useSelector } from 'react-redux'
function App() {
  const users= useSelector(state=>state.users);
  console.log(users)
  return (
    <div>
      <h1>User Data</h1>
    </div>
  )
}

export default App