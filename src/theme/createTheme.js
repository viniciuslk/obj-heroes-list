export const defaultColors = {
  // default
  black: "#000000",

  // brand
  primary: "rgba(212, 32, 38, 1)",
  "primary-1": "rgba(212, 32, 38, .1)",

  // Grey
  grey: "rgba(78,	78,	78, 1)",
  "grey-1": "rgba(165,	165,	165, 1)",
  "grey-2": "rgba(210, 210, 210, 1)"
};

const defaultBreakpoints = [
  "480px",
  "576px",
  "768px",
  "992px",
  "1200px",
  "1600px"
];
defaultBreakpoints.xs = defaultBreakpoints[0];
defaultBreakpoints.sm = defaultBreakpoints[1];
defaultBreakpoints.md = defaultBreakpoints[2];
defaultBreakpoints.lg = defaultBreakpoints[3];
defaultBreakpoints.xl = defaultBreakpoints[4];
defaultBreakpoints.xxl = defaultBreakpoints[5];

const defaultBorderRadius = ["2px", "4px"];
defaultBorderRadius.sm = defaultBorderRadius[0];
defaultBorderRadius.base = defaultBorderRadius[1];

const defaultFonts = {
  default: "'Roboto', sans-serif"
};

const defaultFontSizes = ["12px", "16px", "21px", "27px"];
defaultFontSizes.xxs = defaultFontSizes[0];
defaultFontSizes.xs = defaultFontSizes[1];
defaultFontSizes.md = defaultFontSizes[2];
defaultFontSizes.lg = defaultFontSizes[3];

const defaultFontWeights = [300, 400, 700];
defaultFontWeights.regular = defaultFontWeights[0];
defaultFontWeights.medium = defaultFontWeights[1];
defaultFontWeights.high = defaultFontWeights[2];

const defaultSpace = [
  "0px", // 0
  "4px", // 1
  "8px", // 2
  "12px", // 3
  "16px", // 4
  "20px", // 5
  "24px", // 6
  "34px", // 7
  "42px", // 8
  "60px" // 9
];

defaultSpace.xxs = defaultSpace[1];
defaultSpace.xs = defaultSpace[2];
defaultSpace.sm = defaultSpace[3];
defaultSpace.md = defaultSpace[4];
defaultSpace.lg = defaultSpace[5];
defaultSpace.xl = defaultSpace[6];
defaultSpace.xxl = defaultSpace[7];
defaultSpace.xxxl = defaultSpace[8];

export const createTheme = ({
  name = "default",
  colors = {},
  fonts = defaultFonts,
  breakpoints = defaultBreakpoints,
  borderRadius = defaultBorderRadius,
  fontSizes = defaultFontSizes,
  fontWeights = defaultFontWeights,
  space = defaultSpace,
  ...rest
}) => {
  // merge colors with base colors
  colors = {
    ...defaultColors,
    ...colors
  };

  const mediaQueries = Object.entries(breakpoints).reduce(
    (prev, [key, val]) => ({
      up: {
        ...prev.up,
        [key]: `@media screen and (min-width: ${val})`
      },
      down: {
        ...prev.down,
        [key]: `@media screen and (max-width: ${val})`
      }
    }),
    {
      up: {},
      down: {}
    }
  );

  return {
    // theme name,
    name,

    // colors
    colors,

    // font family
    fonts,

    // font size
    fontSizes,

    // font weight
    fontWeights,

    // margin and padding
    space,

    // media querys
    breakpoints,

    // border radius
    radii: borderRadius,

    // mediaQueries
    mediaQueries,

    // other theme props
    ...rest
  };
};
