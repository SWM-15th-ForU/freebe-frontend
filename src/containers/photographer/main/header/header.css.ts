import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const headerContainer = style([
  sprinkles({ borderColor: "stroke-grey", backgroundColor: "white" }),
  {
    boxSizing: "border-box",
    top: 0,
    left: 0,
    right: 0,
    position: "fixed",

    zIndex: 15,
    height: 51,
    padding: "10px 40px",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    "@media": {
      [breakpoints.mobile]: {
        padding: "10px 20px",
      },
    },
  },
]);

export const linkWrapper = style({
  display: "flex",
  gap: 24,
  "@media": {
    [breakpoints.mobile]: {
      display: "none",
    },
  },
});

export const linkText = style([
  texts["body-02"],
  sprinkles({ color: "text-01" }),
]);

export const profileContainer = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginLeft: 30,
  gap: 20,

  "@media": {
    [breakpoints.mobile]: {
      marginLeft: 20,
    },
  },
});

export const urlStyles = styleVariants({
  container: [
    texts["body-01"],
    sprinkles({
      backgroundColor: "bg-lightgrey",
    }),
    {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      minWidth: 400,
      padding: "7px 6px 7px 12px",
      gap: 15,

      "@media": {
        [breakpoints.mobile]: {
          marginLeft: "auto",
          minWidth: 0,
          padding: 0,
          backgroundColor: "white",
        },
      },
    },
  ],
  content: [
    texts["body-02"],
    sprinkles({
      color: "text-04",
    }),
    {
      flex: 1,
      "@media": {
        [breakpoints.mobile]: {
          display: "none",
        },
      },
    },
  ],
  icon: {
    position: "relative",
    width: 30,
    height: 22,
  },
});

export const menuStyles = styleVariants({
  close: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  header: {
    position: "absolute",
  },
  button: {
    background: "none",
    border: "none",
    display: "none",
    alignItems: "center",
    justifyContent: "center",

    "@media": {
      [breakpoints.mobile]: {
        display: "flex",
      },
    },
  },
  dropdown: [
    sprinkles({ borderColor: "stroke-grey" }),
    {
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,
      boxShadow: "0px 10px 25px 0px #00000026",
    },
  ],
  item: [
    texts["headline-03"],
    sprinkles({
      color: "text-02",
    }),
    {
      width: 200,
      textDecoration: "none",
    },
  ],
  logout: [sprinkles({ color: "pink" })],
});
