'use client'
import { createContext } from 'react'

import Header from './components/header/Header.component'
import LandingSection from './components/sections/landing-section/LandingSection.component';

const Context = createContext()

export default function Home() {
  return (
    <main>
      <Header />
      <LandingSection />
    </main>
  )
}
