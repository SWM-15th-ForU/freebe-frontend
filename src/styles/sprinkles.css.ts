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

const borderColors = {
  grey: "#DBE2E8",
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
    backgroundColor: backgroundColors,
    borderColor: borderColors,
  },
});

const fontSizes = {
  "headline-01": 25,
  "headline-02": 19,
  "headline-03": 15,
  "body-01": 18,
  "body-02": 15,
  "button-01": 18,
  "button-02": 15,
  /*
    TODO: set responsible PC version size
    "headline-01": 21,
    "headline-02": 18,
    "headline-03": 15,
    "body-01": 15, 
    "button-01": 16,
    "button-02": 12,
    "caption-01": 12,
    */
};

const textProperties = defineProperties({
  properties: {
    fontSize: fontSizes,
  },
});

const sprinkles = createSprinkles(colorProperties, textProperties);

export default sprinkles;
