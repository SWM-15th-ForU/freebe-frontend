import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const mypageStyles = styleVariants({
  container: [
    sprinkles({ backgroundColor: "bg-lightgrey" }),
    {
      padding: 40,
      position: "relative",
      height: "auto",
      overflowY: "scroll",
      flexGrow: 1,

      "@media": {
        [breakpoints.mobile]: {
          padding: "24px 20px",
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
      display: "block",
      height: 21.5,
    },
  ],
});

export const profileStyles = styleVariants({
  page: [
    sprinkles({ backgroundColor: "bg-lightgrey" }),
    {
      padding: 40,
      paddingBottom: 0,
      position: "relative",
      height: "auto",
      "@media": {
        [breakpoints.mobile]: {
          padding: "24px 20px",
        },
      },
    },
  ],
  form: {
    position: "relative",
    height: "100%",
    width: "100%",
    "@media": {
      [breakpoints.mobile]: {
        height: "auto",
      },
    },
  },
  formHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
  },
  container: {
    display: "flex",
    height: "calc(100% - 60px)",
    minHeight: 500,
    gap: 24,
    position: "relative",
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
