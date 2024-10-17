import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const loginStyles = styleVariants({
  layout: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    minHeight: "auto",
    padding: "0px 100px",
    columnGap: 50,

    "@media": {
      [breakpoints.mobile]: {
        padding: 0,
      },
    },
  },
  container: {
    margin: "auto",
    flexGrow: 0.7,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    minWidth: "fit-content",
  },
  title: [
    texts["headline-02"],
    sprinkles({
      color: "blue",
    }),
  ],
  subtitle: [
    texts["headline-02"],
    sprinkles({
      color: "text-01",
    }),
  ],
  caption: [
    texts["headline-03"],
    sprinkles({
      color: "text-03",
    }),
    { textDecoration: "underline", marginTop: 10 },
  ],
});
