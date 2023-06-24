'use client'
import { createContext } from 'react'
import Button from './components/button/Button.component'

import '../styles/global.scss'

const Context = createContext()

export default function Home() {
  return (
    <main>
      <Button></Button>
    </main>
  )
}
