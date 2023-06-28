'use client'
import { createContext } from 'react'

import Header from './components/header/Header.component'
import { LandingSection, BenefitsSection, AboutSection } from './components/sections/index';
import { Container } from './components/container';

const Context = createContext()

export default function Home() {
  return (
    <main>
      <Header />

      <Container>
        <LandingSection />
        <BenefitsSection />
        <AboutSection />
      </Container>
    </main>
  )
}
