import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {
    backgroundColor: 'none',
    boxShadow: 'none',
    padding: '0 16px'
  },
  header: {
    display: 'flex',
    justifyContent: 'left',
    padding: '16px 0',
    flexDirection: 'column',
    gap: '24px'
  },
  body: {
    padding: '16px 0'
  },
  footer: {
    display: 'flex',
    alignItems: 'left',
    padding: 0
  }
})

const sizes = {
  md: definePartsStyle({
    container: {
      borderRadius: '0px',
    },
  }),
}

export const cardTheme = defineMultiStyleConfig({ baseStyle, sizes })
