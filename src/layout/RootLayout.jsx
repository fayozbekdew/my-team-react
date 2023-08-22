import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer/Footer'
import Header from '../component/header/Header'

const RootLayout = () => {
  return (
    <>
    <Header/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default RootLayout