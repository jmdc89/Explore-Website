module.exports = {
  siteMetadata: {
    title: "Explore Website",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "W3zQUq7mswG6ucSpB70n-CEvVs4mhQgehz4cyuFlQSA",
        spaceId: "8urwtin6d2ax",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
