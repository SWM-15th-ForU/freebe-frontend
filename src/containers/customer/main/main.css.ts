import { style } from "@vanilla-extract/css";

export const sheetContainer = style({
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  bottom: 0,
  height: "50%",
  width: "100%",
  backgroundColor: "white",
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  padding: 30,
});

export const imageContainer = style({
  position: "relative",
  width: "100%",
  height: 700,
  backgroundColor: "#D9D9D9",
});
