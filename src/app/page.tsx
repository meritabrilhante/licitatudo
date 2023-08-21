'use client'
import { createContext } from 'react'
import React from 'react';
import { ChakraProvider, useMediaQuery } from '@chakra-ui/react'
import { theme } from '@/styles/theme/theme';
import {
    AboutSection,
    BenefitsSection,
    Header,
    HomeSection,
    PartnersSection,
    ServicesSection,
    SocialSection,
    Footer
  }
  from '@/app/layouts'

export default function Home() {
  const [smallerThan540] = useMediaQuery("(max-width: 540px)");

  return (
    <ChakraProvider theme={theme}>
      <Header />

      <HomeSection />

      { smallerThan540 ? <></> : <PartnersSection /> }

      <BenefitsSection />

      <AboutSection />

      <ServicesSection />

      <SocialSection />

      <Footer />
    </ChakraProvider>
  )
}
