import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const colors = {
  white: "#FFFFFF",
  blue: "#007AFF",
  skyblue: "#91CAFF",
  black: "#1E1E1E",

  pink: "#FF7DA4",
  yellow: "#FFBE1C",
  green: "#26E359",

  "text-01": "#1C3641",
  "text-02": "#405C67",
  "text-03": "#849DAB",
  "text-04": "#A9BDC8",
  "text-point": "#287192",

  "bg-lightgrey": "#F2F6FA",
  "bg-lightblue": "#E7F2FB",

  "stroke-grey": "#DBE2E8",
};

const backgroundColors = {
  white: "#FFFFFF",
  lightgrey: "#F2F6FA",
  lightblue: "#E7F2FB",
};

const colorProperties = defineProperties({
  conditions: {
    lightMode: {
      "@media": "(prefers-color-scheme: light)",
    },
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: ["lightMode", "darkMode"],
  properties: {
    color: colors,
    backgroundColor: { ...backgroundColors, ...colors },
    borderColor: colors,
  },
});

const textProperties = defineProperties({
  conditions: {
    mobile: {},
    desktop: { "@media": "screen and (min-width: 700px)" },
  },
  defaultCondition: "mobile",
  properties: {
    fontSize: {
      xxl: 25,
      xl: 21,
      lg: 19,
      md: 18,
      sm: 16,
      xs: 15,
      xxs: 12,
    },
    fontWeight: {
      semibold: 600,
      medium: 500,
      regular: 400,
    },
  },
});

const sprinkles = createSprinkles(colorProperties, textProperties);

export default sprinkles;
