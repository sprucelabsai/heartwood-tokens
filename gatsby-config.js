module.exports = {
  pathPrefix: `/heartwood-tokens`,
  siteMetadata: {
    name: `Heartwood Tokens`,
    tagline: `Design tokens for the Heartwood Design System`
  },  
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Heartwood Tokens`,
        short_name: `HW Tokens`,
        start_url: `/`,
        background_color: `#f9fafc`,
        theme_color: `#20BC93`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source code pro\:400,600`,
          `source sans pro\:400,600` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-mdx`
  ],
}
