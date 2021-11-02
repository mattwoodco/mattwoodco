import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },

  html: {
    // disable elastic scrolling
    height: "100%",
    overflow: "hidden",
  },

  body: {
    // backgroundColor: 'red',

    // disable elastic scrolling
    height: "100%",
    overflow: "auto",

    // set fonts
    fontFamily: "$system",
    fontSize: "$2",
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    WebkitTextSizeAdjust: "100%",

    margin: 0,
  },

  "#__next": {
    backgroundColor: "$hiContrast",
    color: "$loContrast",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    position: "relative",
    zIndex: 0,
  },

  svg: {
    display: "block",
    verticalAlign: "middle",
  },

  // 'pre, code': { margin: 0, fontFamily: '$mono' },
  // 'h1, h2, h3, h4, h5': { fontWeight: 500 },

  "::selection": {
    backgroundColor: "black",
    color: "white",
  },

  a: {
    color: "currentColor",
    textDecoration: "none",
  },
});
