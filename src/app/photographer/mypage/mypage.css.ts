import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { styleVariants } from "@vanilla-extract/css";

export const mypageStyles = styleVariants({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100vw",
    height: "100vh",

    "@media": {
      [breakpoints.mobile]: {
        flexDirection: "column",
      },
    },
  },
  body: [sprinkles({ backgroundColor: "bg-lightgrey" }), { flex: 1 }],
});
