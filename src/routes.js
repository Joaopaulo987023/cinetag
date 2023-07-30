import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Inicio from 'pages/Inicio';
import Favoritos from 'pages/Favoritos';

import Container from 'components/Container';
import Player from 'components/Player';
import PaginaDeErro from 'pages/PaginaDeErro';



export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          
            <Route path='/' element={<Container/>}>
                  <Route path='/' element={<Inicio/>}/>
                  <Route path='/favoritos' element={<Favoritos/>}/>
                  <Route path='/:id' element={<Player/>}/>
                  <Route path='*' element={<PaginaDeErro/>}/>
                  
            </Route>
            
          </Routes>
      
     
      
    </BrowserRouter>
  )
}
