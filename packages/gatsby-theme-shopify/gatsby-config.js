module.exports = options => ({
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'shwilliam',
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        verbose: true,
        paginationSize: 250,
        includeCollections: ['shop'], // defaults to ['shop', 'content'].
        ...options.sourceShopify,
      },
    },
  ],
})
