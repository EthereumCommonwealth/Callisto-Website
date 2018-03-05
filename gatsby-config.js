const rupture = require("rupture");
const nib = require("nib");

module.exports = {
  pathPrefix: '/Callisto-Website',
  siteMetadata: {
    title: 'Callisto Network',
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
