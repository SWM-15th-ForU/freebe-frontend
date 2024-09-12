import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { styleVariants } from "@vanilla-extract/css";

export const mypageStyles = styleVariants({
  container: [
    {
      display: "flex",
      width: "100vw",
      height: "100vh",
      overflowY: "hidden",
      position: "fixed",

      "@media": {
        [breakpoints.mobile]: {
          flexDirection: "column",
        },
      },
    },
  ],
  body: [
    {
      flex: 1,
      overflowY: "scroll",
      position: "relative",
      height: "calc(100% - 51px)",
      display: "flex",
    },
  ],
});
