
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Addproduct from './components/Addproduct'

function App() {
 

  return (
    <>
      <div>
        <Nav></Nav>
        <Routes>
          <Route  path='/home'element={<Home></Home>}></Route>
          <Route path='/addpro'element={<Addproduct></Addproduct>}></Route>
        </Routes>
      </div>
     
    </>
  )
}

export default App
