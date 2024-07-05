import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Skills from './pages/Skills'
import About from './pages/About'

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
      </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
