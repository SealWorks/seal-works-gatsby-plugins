const fs = require("fs")

// 1. make sure the content directory exists
exports.onPreBootstrap = ({ reporter }, options) => {
  const { contentPagesPath } = options
  if (!fs.existsSync(contentPagesPath)) {
    reporter.info(`creating the ${contentPagesPath} directory`)
    fs.mkdirSync(contentPagesPath, { recursive: true })
  }

  const { imgPath } = options
  if (!fs.existsSync(imgPath)) {
    reporter.info(`creating the ${imgPath} directory`)
    fs.mkdirSync(imgPath, { recursive: true })
  }

  const { contentSiteMetadataPath, contentSiteMetadataFilename } = options
  if (!fs.existsSync(contentSiteMetadataPath)) {
    reporter.info(`creating the ${contentSiteMetadataPath} directory`)
    fs.mkdirSync(contentSiteMetadataPath, { recursive: true })
  }
  if (!fs.existsSync(contentSiteMetadataPath + contentSiteMetadataFilename)) {
    fs.appendFile(
      contentSiteMetadataPath + contentSiteMetadataFilename,
      "{}",
      function (err) {
        if (err) throw err
        reporter.info(`creating the ${contentSiteMetadataFilename} file`)
      }
    )
  }
}

// 2 . define the event type
// exports.sourceNodes = ({ actions }) => {
//   actions.createTypes(`
//     type Page implements Node @dotInfer {
//       id: ID!
//       title: String!
//       location: String!
//       startDate: Date! @dateformat @proxy(from: "start_date")
//       endDate: Date! @dateformat @proxy(from: "end_date")
//       url: String!
//       slug: String!
//     }
//   `)
// }

// 3. define resolvers for any custom fields (slug)
// exports.createResolvers = ({ createResolvers }, options) => {
//   const basePath = options.basePath || '/'

//   const slugify = (str) => {
//     const slug = str
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, '-')
//       .replace(/(^-|-$)/g, '')

//     return `/${basePath}/${slug}`.replace(/\/\/+/g, '/')
//   }

//   createResolvers({
//     Event: {
//       slug: {
//         resolve: (source) => slugify(source.name),
//       },
//     },
//   })
// }

// 4. query for events and create pages

// exports.createPages = async ({ actions, graphql, reporter }, options) => {
//   const basePath = options.basePath || '/'
//   actions.createPage({
//     path: basePath,
//     component: require.resolve('./src/templates/events.js'),
//   })

//   const result = await graphql(`
//     query {
//       allEvent(sort: { fields: startDate, order: ASC }) {
//         nodes {
//           id
//           slug
//         }
//       }
//     }
//   `)
//   if (result.errors) {
//     reporter.panic('error loading events', reporter.errors)
//     return
//   }

//   const events = result.data.allEvent.nodes

//   events.forEach((event) => {
//     const { slug } = event
//     actions.createPage({
//       path: slug,
//       component: require.resolve('./src/templates/event.js'),
//       context: {
//         eventID: event.id,
//       },
//     })
//   })
// }
