import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const mainviewStyles = styleVariants({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "32px 40px 80px 40px",
    "@media": {
      [breakpoints.mobile]: {
        padding: "24px 20px 50px 20px",
        flexDirection: "column-reverse",
        justifyContent: "flex-end",
      },
    },
  },
  content: {
    width: "100%",
    minWidth: 375,
    display: "flex",
    flexDirection: "column",
  },
  controller: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  link: [
    texts["headline-03"],
    sprinkles({
      color: "blue",
    }),
    {
      display: "flex",
      alignItems: "center",
      gap: 8,
      textDecoration: "none",
    },
  ],
});

export const customDrawerStyles = styleVariants({
  root: {
    display: "none",
    "@media": {
      [breakpoints.mobile]: {
        display: "block",
      },
    },
  },
  body: {
    padding: "0px 0px 60px 10px",
  },
});
