module.exports = ({
  contentPagesPath = 'src/pages',
  basePath = '/',
  imgPath = 'static/img',
  mdxOptions = {},
  mdxLayouts = {},
  contentSiteMetadataFilename = 'siteMetadata.json',
  contentSiteMetadataPath = 'src/content/settings',
}) => ({
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: imgPath,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: contentPagesPath,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              quality: 80,
              maxWidth: 1200,
              options: {
                quality: 100,
                maxWidth: 1200,
                srcSetBreakpoints: [200, 420, 720, 900],
              },
              backgroundColor: '#ccc',
              withWebp: { quality: 80 },
              showCaptions: true,
              linkImagesToOriginal: false,
              defaultLayouts: {
                default: require.resolve('./src/layouts/default.jsx'),
                ...mdxLayouts,
              },
              ...mdxOptions,
            },
          },
        ],
      },
    },
  ],
})
