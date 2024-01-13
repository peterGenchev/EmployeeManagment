
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard  from './components/Dashboard'
import Login from './components/Login'
import Home from './components/Home'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/dashboard' element={<Dashboard />}>
      <Route path='' element={<Home />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
