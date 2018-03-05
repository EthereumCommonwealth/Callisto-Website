const rupture = require("rupture");
const nib = require("nib");

module.exports = {
  pathPrefix: '/Callisto-Website',
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-plugin-stylus",
      options: {
        use: [nib(), rupture()],
      },
    },
  ],
};
