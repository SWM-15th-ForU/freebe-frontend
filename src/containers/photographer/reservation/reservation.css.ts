import { breakpoints } from "@/styles/breakpoints.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  width: "100vw",
  padding: "30px 50px",
  display: "flex",
  columnGap: 60,

  "@media": {
    [breakpoints.mobile]: {
      padding: "20px 24px",
      flexDirection: "column",
    },
  },
});

export const detailStyle = style({
  flex: 1,
  "@media": {
    [breakpoints.mobile]: {
      width: "100%",
    },
  },
});
