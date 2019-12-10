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
    nav: {
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid #ddd",
      marginBottom: "1rem",
    },
    "nav > ul": {
      margin: "0.5rem",
    },
    "nav > ul > li": {
      listStyleType: "none",
      margin: "0.5rem",
    },
    "nav > ul > li:first-child": {
      marginLeft: 0,
    },
    "nav > ul > li > a": {
      textDecoration: "none",
    },
  }),
})

export const { scale, rhythm, options } = typography

export default typography
