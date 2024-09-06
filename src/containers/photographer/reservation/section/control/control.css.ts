import { breakpoints } from "@/styles/breakpoints.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: 40,
  minWidth: 450,
  flex: 0.5,

  position: "relative",
  "@media": {
    [breakpoints.mobile]: {
      minWidth: "100%",
    },
  },
});
