import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { styleVariants } from "@vanilla-extract/css";

export const profileStyles = styleVariants({
  form: {
    position: "relative",
    height: "100%",

    "@media": {
      [breakpoints.mobile]: {
        height: "auto",
      },
    },
  },
  container: {
    display: "flex",
    width: "auto",

    height: "100%",
    paddingBottom: 16,
    minHeight: 500,
    gap: 24,
    position: "relative",
    overflowX: "scroll",
  },
  preview: [
    sprinkles({
      borderColor: "blue",
    }),
    {
      width: 350,
      flexShrink: 0,
      position: "relative",
      height: "100%",
      borderWidth: 2,
      borderBottomWidth: 0,
      borderStyle: "solid",
      display: "flex",
      flexDirection: "column",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      overflowY: "hidden",
      overflowX: "hidden",

      "@media": {
        [breakpoints.mobile]: {
          display: "none",
        },
      },
    },
  ],
  submit: [
    sprinkles({
      backgroundColor: "white",
      borderColor: "stroke-grey",
    }),
    {
      position: "absolute",
      bottom: -40,
      height: 56,
      left: -40,
      right: -40,
      padding: 8,
      paddingRight: 40,
      borderTopStyle: "solid",
      borderTopWidth: 1,

      "@media": {
        [breakpoints.mobile]: {
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          paddingRight: 8,
        },
      },
    },
  ],
});