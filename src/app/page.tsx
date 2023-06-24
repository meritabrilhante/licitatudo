'use client'
import { createContext } from 'react'

import '../styles/global.scss'
import Header from './components/header/Header.component'

const Context = createContext()

export default function Home() {
  return (
    <main>
      <Header />
    </main>
  )
}
