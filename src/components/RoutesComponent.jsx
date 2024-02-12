import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { NavBar } from './NavBar'
import { Product } from './Product'
import { Contact } from './Contact'
import { Cart } from './Cart'
import { Payment } from './Payment'

export const RoutesComponent = () => {
  return (
    <Router>
        <NavBar />
        <section className="separation"></section>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/payment' element={<Payment />} />
        </Routes>
    </Router>
  )
}
