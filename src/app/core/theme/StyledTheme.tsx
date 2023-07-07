export const StyledTheme = {
  // direction: "ltr",
  border_radius: "5px",
  colors: {
    primary: "#ff2800",
    primaryTwo: "#FF6C51",
    primaryLight: "#ffad9f",
    primaryBackground: "#f8f8f9",
    secondaryBackground: "#818e94a8",
    disabledBackground: "#CACACA",
    primaryFont: "#000000",
    secondaryFont: "#818e94",
  },

  media: {
    laptop_large: "only screen and (max-width : 1440px)",
    laptop: "only screen and (max-width : 1360px)",
    tablet: "only screen and (max-width : 768px)",
    mobile_large: "only screen and (max-width : 425px)",
    mobile_medium: "only screen and (max-width : 375px)",
    mobile_small: "only screen and (max-width : 320px)",
    mobile_and_higher_only: "only screen and (min-width : 426px)",
    tablets_and_higher_only: "only screen and (min-width : 769px)",
    laptops_and_higher_only: "only screen and (min-width : 1366px)",
  },
  mixins: {
    transition: (property: string, duration: number) => `
        -webkit-transition: ${property} ${duration}ms ease-in-out;
        -moz-transition: ${property} ${duration}ms ease-in-out;
        -ms-transition: ${property} ${duration}ms ease-in-out;
        -o-transition: ${property} ${duration}ms ease-in-out;
        transition: ${property} ${duration}ms ease-in-out;`,
    fixed_square: (side: string) => `
        width: ${side};
        min-width: ${side};
        max-width: ${side};
        height: ${side};
        min-height: ${side};
        max-height: ${side};`,
    background_cover: (url: string) => `
          background-image: url(${url});
          background-size: cover;
          background-position: center center;`,
    radius: (radius: string) => `
          border-radius: ${radius} !important;
          -webkit-border-radius: ${radius} !important;
          -moz-border-radius: ${radius} !important;
          -ms-border-radius: ${radius} !important;
          -o-border-radius: ${radius} !important;`,
    transfrom_scale: (scale: number) => `
          transform: scale(${scale});
          -webkit-transform: scale(${scale});
          -moz-transform: scale(${scale});
          -ms-transform: scale(${scale});
          -o-transform: scale(${scale});`,
    translate: (x: string, y: string) => `
          transform: translate(${x}, ${y});
          -webkit-transform: translate(${x}, ${y});
          -moz-transform: translate(${x}, ${y});
          -ms-transform: translate(${x}, ${y});
          -o-transform: translate(${x}, ${y});`,
  },
};
