import React from 'react'
import {Footer} from './Footer'
import {Header} from './Header'

export const DefaultLayout = ({children}) => {
  return (
    <div className='default-layout'>
      <header className='header'>
        <Header />   
      </header>
      <main className='main mt-5'>
        {children}
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}
