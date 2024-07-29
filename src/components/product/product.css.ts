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

export const bannerDiv = style({
  backgroundColor: "#A5A5A5",
  borderRadius: 10,
  padding: 10,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
});

export const textInput = style({
  border: 0,
  width: "80%",
});

export const inputBox = style({
  backgroundColor: "#D9D9D9",
  borderRadius: 10,
  padding: 10,
  marginTop: 20,
});
