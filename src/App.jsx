//css
import './App.css'

//React
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './pages/home/Home'
import RootLayout from './layout/RootLayout'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

function App() {
  
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
