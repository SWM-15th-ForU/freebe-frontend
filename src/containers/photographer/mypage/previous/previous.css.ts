import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const layoutStyles = styleVariants({
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
  header: {
    height: 40,
    display: "flex",
    alignItems: "center",
  },
  search: {
    display: "flex",
    position: "relative",
    gap: 10,
    height: "100%",
    marginLeft: "auto",
  },
  title: [
    texts["headline-02"],
    sprinkles({
      color: "text-02",
    }),
    {
      display: "block",
    },
  ],
  content: [
    {
      width: "100%",
      height: "calc(100% - 21.5px)",
      paddingTop: 20,
      position: "relative",

      "@media": {
        [breakpoints.mobile]: {
          height: "100%",
        },
      },
    },
  ],
});
