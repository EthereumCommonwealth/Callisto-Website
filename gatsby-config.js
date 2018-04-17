const rupture = require("rupture");
const nib = require("nib");

module.exports = {
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
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: "./src/images/clo-icon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }
  ],
};
