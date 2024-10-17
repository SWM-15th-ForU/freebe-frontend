import { breakpoints } from "@/styles/breakpoints.css";
import { style } from "@vanilla-extract/css";

export const layoutStyle = style({
  width: "450px",
  margin: "auto",
  position: "relative",
  boxShadow: "0px 10px 15px 0px rgba(0, 0, 0, 0.25)",
  "@media": {
    [breakpoints.mobile]: { width: "100vw" },
  },
});

export const contentStyle = style({
  minHeight: "100vh",

  position: "relative",
});
