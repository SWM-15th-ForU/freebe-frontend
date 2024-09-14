import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

const baseTab = style([
  sprinkles({ borderColor: "stroke-grey" }),
  {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    padding: "10px 16px",
    cursor: "pointer",
  },
]);

const baseButton = style([
  {
    position: "relative",
    width: "100%",
    minWidth: 60,
    borderRadius: 8,
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
]);

const buttonStyles = styleVariants({
  kakao: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    margin: 30,
    gap: 42,
    border: 0,
    width: 280,
    height: 54,
    backgroundColor: "#FEE500",
    borderRadius: 8,
    fontSize: 17,
    fontWeight: 600,
    color: "#1a1a1a",
    ":hover": {
      cursor: "pointer",
    },
  },
  add: [
    texts["button-01"],
    sprinkles({
      borderColor: "blue",
      color: "blue",
      backgroundColor: "white",
    }),
    {
      width: "100%",
      height: 56,
      borderStyle: "solid",
      borderRadius: 8,
      borderWidth: 1,
      marginTop: 15,
      padding: 10,
    },
  ],
  link: [
    texts["button-01"],
    sprinkles({
      backgroundColor: "blue",

      color: "white",
    }),
    {
      display: "flex",
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      padding: 10,
    },
  ],
  tab: [
    texts["body-02"],
    sprinkles({
      color: "text-02",
    }),
    baseTab,
  ],
  selectedTab: [
    texts["headline-03"],
    sprinkles({
      color: "text-01",
      backgroundColor: "bg-lightgrey",
    }),
    baseTab,
  ],
  submit: [
    texts["button-01"],
    sprinkles({
      backgroundColor: "blue",
      color: "white",
    }),
    {
      width: "100%",
      borderRadius: 8,
      marginTop: 20,
      height: 56,
      padding: 5,
      border: "none",
    },
  ],
  bottom: [
    sprinkles({ backgroundColor: "blue" }),
    {
      zIndex: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      width: "100%",
      height: "72px",
      bottom: 0,
      color: "white",
    },
  ],
  primary: [
    baseButton,
    sprinkles({
      backgroundColor: "blue",
      color: "white",
    }),
    {
      border: "none",
    },
  ],
  line: [
    baseButton,
    sprinkles({
      borderColor: "blue",
      color: "blue",
    }),
    {
      background: "none",
      borderStyle: "solid",
      borderRadius: 8,
      borderWidth: 1,
    },
  ],
  secondary: [
    baseButton,
    sprinkles({
      backgroundColor: "bg-lightblue",
      color: "text-02",
    }),
    {
      border: "none",
    },
  ],
  xs: [texts["button-02"], { borderRadius: 4, padding: 5 }],
  sm: [texts["button-02"], { padding: 10 }],
  md: [texts["button-01"], { height: 48 }],
  lg: [texts["button-01"], { height: 56 }],
  disabled: [
    baseButton,
    sprinkles({
      backgroundColor: "bg-lightblue",
      color: "text-04",
    }),
    {
      border: "none",
      cursor: "initial",
    },
  ],
});

export const closeStyles = styleVariants({
  container: {
    position: "relative",
    zIndex: 3,
    display: "flex",
    alignItems: "center",
  },
  grey: [
    sprinkles({
      color: "stroke-grey",
    }),
  ],
  white: [
    sprinkles({
      color: "white",
    }),
  ],
  background: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    height: "auto",
  },
});

export default buttonStyles;
