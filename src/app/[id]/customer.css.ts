import { breakpoints } from "@/styles/breakpoints.css";
import { style } from "@vanilla-extract/css";

export const layoutStyle = style({
  width: "450px",
  height: "100vh",
  margin: "auto",
  position: "relative",
  overflowY: "hidden",
  "@media": {
    [breakpoints.mobile]: { width: "100vw" },
  },
});

export const mainStyle = style({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  overflowY: "hidden",
  overflowX: "hidden",
  position: "relative",
});
