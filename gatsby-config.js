/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`
      }
    }
  ],
  siteMetadata: {
    title: 'Universe',
    description: 'universe portfolio',
    copyright: 'This website is copyright 2021 universe-project',
    contact: 'horvat.marko2212@gmail.com'
  }
}
