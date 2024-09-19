import { breakpoints } from "@/styles/breakpoints.css";
import { styleVariants } from "@vanilla-extract/css";

export const mypageStyles = styleVariants({
  container: [
    {
      width: "100vw",
      height: "100vh",
      overflowY: "hidden",
      position: "fixed",
    },
  ],
  body: [
    {
      flex: 1,
      overflowY: "scroll",
      position: "relative",
      height: "calc(100% - 51px)",
      display: "flex",

      "@media": {
        [breakpoints.mobile]: {
          flexDirection: "column",
        },
      },
    },
  ],
});
