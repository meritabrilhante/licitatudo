import { defineStyle, defineStyleConfig } from '@chakra-ui/react'


const solidGreen = defineStyle({
  fontWeight: 600,
  backgroundColor: 'green.100',
  padding: '16px',
  fontSize: '18px',
  color: 'white.100',
  boxShadow: '5px 6px 11px 0px rgba(0, 0, 0, 0.10)',
  '_hover': {
    backgroundColor: 'green.200'
  }
})

const solidBlue = defineStyle({
  fontWeight: 600,
  padding: '16px',
  fontSize: '18px',
  backgroundColor: 'blue.100',
  color: 'white.100',
  boxShadow: '5px 6px 11px 0px rgba(0, 0, 0, 0.10)',
  '_hover': {
    backgroundColor: '#2A54A9'
  }
})

const outlined = defineStyle({
  fontWeight: 500,
  backgroundColor: 'none',
  padding: '16px',
  fontSize: '18px',
  color: 'blue.300',
  '_hover': {
    backgroundColor: 'white.100'
  }
})

export const buttonTheme = defineStyleConfig({
  variants: { solidGreen, solidBlue, outlined }
})