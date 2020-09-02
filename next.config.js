const withCss = require("@zeit/next-css");

if (typeof require !== "undefined") {
  require.extensions[".css"] = (file) => {};
}

const withSass = require("@zeit/next-sass");

//同时使用Css和Sass
module.exports = withCss(withSass({}));


