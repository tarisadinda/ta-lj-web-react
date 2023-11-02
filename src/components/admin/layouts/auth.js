import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material';
import Footer from '../footer';
import { Outlet } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
})

export default function LayoutAuth() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <div className='container auth-wrap'>
              <main className='main flex-grow-1'>
                <Outlet />
              </main>
              <div className='mt-5'>
                <Footer />
              </div>
          </div>
        </ThemeProvider>
      </>  
    )
}