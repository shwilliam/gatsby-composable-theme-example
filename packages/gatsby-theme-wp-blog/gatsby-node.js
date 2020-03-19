exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  const wordPressPostTemplate = require.resolve(
    `./src/templates/wordpress-blog-post.js`,
  )

  return graphql(
    `
      query loadPagesQuery {
        allWordpressPost {
          nodes {
            id
            date
            title
            slug
            content
            excerpt
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allWordpressPost.nodes.forEach(node => {
      createPage({
        path: `/blog/${node.slug}`,
        component: wordPressPostTemplate,
        context: {
          id: node.id,
        },
      })
    })
  })
}
