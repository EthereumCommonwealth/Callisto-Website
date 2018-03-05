// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/carlossampol/Proyectos/Callisto/Callisto-Website/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-index-js": preferDefault(require("/Users/carlossampol/Proyectos/Callisto/Callisto-Website/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/carlossampol/Proyectos/Callisto/Callisto-Website/.cache/json/layout-index.json"),
  "index.json": require("/Users/carlossampol/Proyectos/Callisto/Callisto-Website/.cache/json/index.json")
}