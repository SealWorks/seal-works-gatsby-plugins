const siteMetadata = require('./src/content/settings/siteMetadata.json')

module.exports = {
  siteMetadata,
  plugins: [
    '@sealworks/sw-theme-core',
    '@sealworks/sw-styles-tailwindcss',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: true, // Netlify hosting
        publicPath: `_admin`,
        htmlTitle: `Netlify CMS Panel`,
        // htmlFavicon: `/icons/icon-48x48.png`,
        manualInit: true,
      },
    },
  ],
}
