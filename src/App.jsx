import { useState, createContext } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Demo_useContext from './pages/Demo_useContext'
import Demo_useReducer from './pages/Demo_useReducer'
import ReducerDemo2 from './components/ReducerDemo2'
import CustomHooks from './pages/CustomHooks'

export const cartContext = createContext();

function App() {

  const [cartCounter, setCartCounter] = useState(0);
  const addCart = () => setCartCounter(cartCounter + 1);


  return (
    <>

      <cartContext.Provider value={{ cartCounter, addCart }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Demo_useContext" element={<Demo_useContext />} />
            <Route path="/Demo_useReducer" element={<Demo_useReducer />} />
            <Route path="/Demo_useReducer/2" element={<ReducerDemo2 />} />
            <Route path="/CustomHooks" element={<CustomHooks />} />

          </Routes>
        </BrowserRouter>
      </cartContext.Provider>
    </>
  )
}

export default App
