import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./button/theme";
import { cardTheme } from "./card/theme";

export const theme = extendTheme({
  colors: {
    green: {
      "100": "#049D3E",
      "200": "#00AC34",
      "300": "#D1FDCA"
    },
    blue: {
      "100": "#002777",
      "200": "#032A79",
      "300": "#383849"
    },
    white: {
      "100": "#f5f5f5",
      "200": "#ffffff"
    },
    gray: {
      "100": "#D0D6E2",
      "200": "#F7FAFF",
      "300": "#222222"
    }
  },
  fonts: {
    heading: "Montserrat, sans-serif;",
    body: "Montserrat, sans-serif;",
  },
  styles: {
    html: {
      height: "100%",
      width: "100%"
    },
    global: {
      body: {
        height: "inherit",
        width: "inherit",
        bg: "white.200",
        color: "blue.300",
        lineHeight: "160%",
        fontWeight: 400,
        maxWidth: "100vw",
        overflow: "scroll"
      },
      h1: {
        color: 'blue.300',
        fontWeight: 700,
        fontSize: '48px',
        lineHeight: '120%'
      },
      h2: {
        color: 'blue.300',
        fontWeight: 700,
        fontSize: '40px',
        lineHeight: '140%'
      },
      h3: {
        color: 'blue.300',
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: '120%'
      },
      h4: {
        color: 'blue.300',
        fontWeight: 500,
        fontSize: '18px'
      },
      h5: {
        color: 'blue.100',
        fontWeight: 700,
        fontSize: '14px',
        letterSpacing: '3.84px'
      },
      p: {
        fontWeight: 400,
        lineHeight: "180%"
      }
    },
  },
  components:
    { Button: buttonTheme,  Card: cardTheme }
});