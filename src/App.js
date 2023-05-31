import React from 'react'
import Header from './components/add/Header.js'
import Aside from './components/add/Aside.js'
import Register from './screen/Register.js'
import Footer from './components/add/Footer.js'


export default function App() {
  return (
    <div>
      <Header/>
      <Aside/>
      <Register/>
      <Footer/>
    </div>
  )
}
