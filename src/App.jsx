import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Startseite from './components/Startseite'
import ActualWeather from './components/ActualWeather'
import './style/App.css'

function App() {
  

  return (
    
    <BrowserRouter basename="/Wettereisstock">>
      <Routes>
        <Route path='/' element={<Startseite />} />
        <Route path='/actualWeather' element={<ActualWeather />} />
      </Routes>
    </BrowserRouter>
     
   
  )
}

export default App
