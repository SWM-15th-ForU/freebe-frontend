import { breakpoints } from "@/styles/breakpoints.css";
import { styleVariants } from "@vanilla-extract/css";

export const mypageStyles = styleVariants({
  container: [
    {
      height: "calc(100vh - 51px)",
      overflowY: "scroll",
      position: "relative",
    },
  ],
  body: [
    {
      flex: 1,
      position: "relative",
      height: "100%",
      display: "flex",
      boxSizing: "content-box",

      "@media": {
        [breakpoints.mobile]: {
          flexDirection: "column",
        },
      },
    },
  ],
});
