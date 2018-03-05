// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/carlossampol/Proyectos/Callisto/Callisto-Website/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/carlossampol/Proyectos/Callisto/Callisto-Website/.cache/json/layout-index.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/carlossampol/Proyectos/Callisto/Callisto-Website/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/carlossampol/Proyectos/Callisto/Callisto-Website/.cache/layouts/index.js")
}