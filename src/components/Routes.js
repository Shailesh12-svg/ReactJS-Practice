import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Datafetching from './Datafetching'
import { Route } from 'react-router-dom'
import Home from './Home'
const Routes = () => {
  return (
    <BrowserRouter basename='/'>

        <Routes>
        <Route path ="/" element={Home}/>   
        <Route path ='/data' element={Datafetching}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routes