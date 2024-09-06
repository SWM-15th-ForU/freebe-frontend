import { breakpoints } from "@/styles/breakpoints.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  padding: "30px 50px",
  display: "flex",

  "@media": {
    [breakpoints.mobile]: {
      padding: "20px 24px",
    },
  },
});
