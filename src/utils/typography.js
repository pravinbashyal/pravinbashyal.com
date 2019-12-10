import React from "react"
import Typography from "typography"
import oceanBeachTheme from "typography-theme-ocean-beach"

const typography = new Typography({
  ...oceanBeachTheme,
  baseFontSize: "16px",
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    body: {
      maxWidth: "42rem",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "1.5rem 1.125rem",
      paddingTop: "1.5rem",
    },
  }),
})

export const { scale, rhythm, options } = typography

export default typography
