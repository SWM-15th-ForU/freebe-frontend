import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

const baseButton = style({
  position: "relative",
  width: "100%",
  borderRadius: 8,
  padding: 8,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  background: "none",
  border: "none",
  gap: 10,
});

export const itemStyles = styleVariants({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
    padding: "20px 10px 10px 10px",
    position: "relative",
    height: "calc(100vh - 51px)",
    overflowY: "scroll",
  },
  title: [
    texts["headline-02"],
    sprinkles({ color: "text-01" }),
    { padding: 8, display: "block" },
  ],
  selectedButton: [
    baseButton,
    sprinkles({
      backgroundColor: "bg-lightgrey",
      color: "blue",
      fontSize: {
        desktop: "xs",
        mobile: "sm",
      },
      fontWeight: "semibold",
    }),
  ],
  button: [
    baseButton,
    sprinkles({
      color: "text-02",
      fontSize: {
        desktop: "xs",
        mobile: "sm",
      },
      fontWeight: "regular",
    }),
  ],
  mobileDisable: {
    "@media": {
      [breakpoints.mobile]: {
        display: "none",
      },
      "screen and (max-height: 660px)": {
        display: "none",
      },
    },
  },
});

export const linkStyles = styleVariants({
  dropdown: [
    sprinkles({ borderColor: "stroke-grey", backgroundColor: "white" }),
    {
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,
      padding: 20,
      boxShadow: "0px 10px 25px 0px #00000026",
      top: -30,
      left: 250,
      zIndex: 300,
      position: "absolute",
    },
  ],
  container: [
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
      marginTop: 10,

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
      color: "text-03",
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

const baseContainer = style([
  sprinkles({ borderColor: "stroke-grey", backgroundColor: "white" }),
  {
    position: "sticky",
    top: 51,
    left: 0,

    borderRightStyle: "solid",
    borderRightWidth: 1,
    height: "calc(100vh - 51px)",
    transition: "width 0.3s ease",
    flexShrink: 0,
    zIndex: 3,

    "@media": {
      [breakpoints.mobile]: {
        display: "none",
      },
    },
  },
]);

const baseIcon = style({
  transition: "transform 0.5s ease",
  paddingLeft: 3,
});

export const menuStyles = styleVariants({
  container: [baseContainer, { width: 250 }],
  closedContainer: [baseContainer, { width: 25 }],
  control: [
    sprinkles({ borderColor: "stroke-grey", backgroundColor: "white" }),
    {
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: "100%",
      position: "absolute",
      padding: 0,
      right: -15,
      top: 30,
      width: 30,
      height: 30,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  ],
  openIcon: [baseIcon],
  closeIcon: [baseIcon, { transform: "rotate(180deg)" }],
});
