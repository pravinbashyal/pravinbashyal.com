module.exports = {
  siteMetadata: {
    title: "Test",
    description: "Test title",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    // { resolve: "gatsby-plugin-jss", option: { theme } },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./src/utils/typography`,
      },
    },
  ],
}
