import React from 'react'
import Navbar from '../../components/navbar'
import { Outlet } from 'react-router-dom'

export default function LayoutMain({ children }) {
  return (
    <>
      <div>
        <Navbar />
        <main
          style={{
            margin: '0px 50px 0px 265px',
            padding: '100px 0px'
          }}
        >
          {children}
          <Outlet />
        </main>
      </div>
    </>  
  )
}