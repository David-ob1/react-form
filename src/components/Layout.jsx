import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = () => {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      minHeight:'100vh'
      }}>
        <Header/>
        <div style={{flexGrow:2}}>
        <Outlet />
        
        </div>
        <Footer/>
    </div>
  )
}
