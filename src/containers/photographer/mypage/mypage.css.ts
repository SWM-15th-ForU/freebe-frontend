import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const navbarStyle = styleVariants({
  container: [
    sprinkles({ backgroundColor: "white", borderColor: "stroke-grey" }),
    {
      alignSelf: "flex-start",
      padding: 30,
      width: 250,
      flexShrink: 0,
      height: "100%",
      borderRightWidth: 1,
      borderRightStyle: "solid",

      "@media": {
        [breakpoints.mobile]: {
          width: "100%",
          height: "auto",
          padding: 20,
          border: "none",
        },
      },
    },
  ],
  title: [
    texts["headline-02"],
    sprinkles({
      color: "text-02",
    }),
    {
      "@media": {
        [breakpoints.mobile]: {
          display: "none",
        },
      },
    },
  ],
  tabWrapper: [
    texts["body-02"],
    sprinkles({
      borderColor: "text-03",
    }),
    {
      borderTopWidth: 1,
      borderTopStyle: "solid",
      marginTop: 10,
      "@media": {
        [breakpoints.mobile]: {
          display: "none",
        },
      },
    },
  ],
  tabDropdown: {
    display: "none",
    "@media": {
      [breakpoints.mobile]: {
        display: "block",
      },
    },
  },
});
