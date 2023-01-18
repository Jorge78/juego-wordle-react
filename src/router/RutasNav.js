import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { AcercaDe } from '../components/AcercaDe'
import { HeaderNav } from '../layout/HeaderNav'
import { Footer } from '../layout/Footer'

export const RutasNav = () => {
  return (
    <BrowserRouter>

        <HeaderNav />

        <Routes>
            <Route path='/' element={<Inicio />}  />
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/acercade' element={<AcercaDe />} />
            <Route path='*' element={<Inicio />} />
        </Routes>

        <Footer />

    </BrowserRouter>
  )
}
