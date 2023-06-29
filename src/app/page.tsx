'use client'
import { createContext } from 'react'

import Header from './components/header/Header.component'
import { LandingSection, BenefitsSection, AboutSection, ServicesSection, MidiasSection, TalkToUs, TalkToUsSection } from './components/sections/index';
import { Container } from './components/container';
import { Footer } from './components/footer';

const Context = createContext()

export default function Home() {
  return (
    <main>
      <Header />

      <Container>
        <LandingSection />
        <BenefitsSection />
        <AboutSection />
        <ServicesSection />
      </Container>

      <section style={{ width: '100%', backgroundColor: 'var(--primary-blue)', padding: '4rem 0' }}>
        <Container>
          <MidiasSection />
        </Container>
      </section>

      <Container>
        <TalkToUsSection />
      </Container>

      <Container>
        <Footer />
      </Container>
    </main>
  )
}
