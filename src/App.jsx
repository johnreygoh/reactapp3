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
import FetchDemo from './pages/FetchDemo'
import AxiosDemo from './pages/AxiosDemo'
import AsyncDemo from './pages/AsyncDemo'
import ReduxToolkitDemo from './pages/ReduxToolkitDemo'
import ZustandDemo from './pages/ZustandDemo'
import StatBox from './optimization/Reactmemo'

export const cartContext = createContext();

function App() {

  const [timer, setTimer] = useState(0);
  const [cartCounter, setCartCounter] = useState(0);
  const addCart = () => setCartCounter(cartCounter + 1);


  return (
    <>
      <div>
        <button onClick={() => setTimer(timer + 1)}>Tick: {timer}</button>
        {/* StatBox won't re-render on every tick, because its props don't change */}
        <StatBox title="High Score" value={949} />
      </div>

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
            <Route path="/FetchDemo" element={<FetchDemo />} />
            <Route path="/AxiosDemo" element={<AxiosDemo />} />
            <Route path="/AsyncDemo" element={<AsyncDemo />} />
            <Route path="/ReduxToolkitDemo" element={<ReduxToolkitDemo />} />
            <Route path="/ZustandDemo" element={<ZustandDemo />} />
          </Routes>
        </BrowserRouter>
      </cartContext.Provider>
    </>
  )
}

export default App
