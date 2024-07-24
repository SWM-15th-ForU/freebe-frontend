import { style } from "@vanilla-extract/css";

export const formDiv = style({
  width: "50%",
  margin: "auto",
  paddingTop: 50,
  alignSelf: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 15,
});

export const textInput = style({
  border: 0,
  width: "80%",
});
