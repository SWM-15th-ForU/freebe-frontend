import { breakpoints } from "@/styles/breakpoints.css";
import { styleVariants } from "@vanilla-extract/css";

export const photographerStyles = styleVariants({
  headerLayout: {
    minHeight: "100vh",
    paddingTop: 51,
  },
  body: {
    display: "flex",
    position: "relative",
    maxWidth: "100vw",
    // overflowX: "scroll",
    "@media": {
      [breakpoints.mobile]: {
        minHeight: "calc(100vh - 51px)",
      },
    },
  },
  content: {
    flex: 1,
    display: "flex",
    overflowX: "scroll",
  },
});
