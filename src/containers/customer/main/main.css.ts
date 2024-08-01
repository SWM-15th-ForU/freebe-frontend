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
  paddingBottom: 60,
});

export const imageContainer = style({
  position: "relative",
  width: "100%",
  height: 700,
  backgroundColor: "#D9D9D9",
});

export const buttonsWrapper = style({
  width: "100%",
  flex: 1,
  overflowY: "scroll",
  display: "flex",
  flexDirection: "column",
  gap: 15,
});
