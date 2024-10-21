import { breakpoints } from "@/styles/breakpoints.css";
import { styleVariants } from "@vanilla-extract/css";

export const mypageStyles = styleVariants({
  container: [
    {
      height: "calc(100vh - 51px)",
      overflowY: "hidden",
      position: "relative",
    },
  ],
  body: [
    {
      flex: 1,
      position: "relative",
      height: "100%",
      display: "flex",

      "@media": {
        [breakpoints.mobile]: {
          flexDirection: "column",
        },
      },
    },
  ],
});
