
import { Outlet } from 'react-router'
import './App.css'

function App() {


  return (
    <>
      <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <Outlet></Outlet>
    </>
  )
}

export default App
