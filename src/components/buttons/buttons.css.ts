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
  },
]);

const buttonStyles = styleVariants({
  kakao: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
    gap: 12,
    border: 0,
    width: 184,
    height: 45,
    backgroundColor: "#FEE500",
    borderRadius: 12,
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
});

export default buttonStyles;
