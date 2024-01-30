import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import List from './components/list/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<List />} />
      </Routes>
    </>
  )
}

export default App
