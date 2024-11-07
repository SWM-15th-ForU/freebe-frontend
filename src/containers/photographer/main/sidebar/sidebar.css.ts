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
  border: "none",
  gap: 10,

  ":active": {
    filter: "none",
  },
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

    "@media": {
      [breakpoints.mobile]: {
        height: "100%",
      },
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 50,
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
      backgroundColor: "white",
      color: "text-02",
      fontSize: {
        desktop: "xs",
        mobile: "sm",
      },
      fontWeight: "regular",
    }),
  ],
  caption: [
    sprinkles({ color: "text-03", fontSize: "xs", fontWeight: "medium" }),
    {
      display: "none",
      background: "none",
      border: "none",
      "@media": {
        [breakpoints.mobile]: {
          display: "inline",
        },
      },
    },
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
      boxShadow: "0px 10px 25px 0px #00000026",
      position: "absolute",
      maxWidth: 400,
      top: 280,
      left: 50,
      "@media": {
        [breakpoints.mobile]: {
          top: 230,
          left: 10,
          right: 10,
        },
      },
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
      padding: "7px 6px 7px 12px",
      gap: 15,
      marginTop: 10,

      "@media": {
        [breakpoints.mobile]: {
          marginLeft: "auto",
          minWidth: 0,
        },
      },
    },
  ],
  title: [
    texts["headline-03"],
    sprinkles({ color: "text-point" }),
    { marginBottom: 8, display: "block" },
  ],
  content: [
    texts["body-02"],
    sprinkles({
      color: "text-03",
    }),
    {
      flex: 1,
      minWidth: "fit-content",
    },
  ],
  icon: {
    position: "relative",
    width: 30,
    height: 22,
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 8,
    marginTop: 12,
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
