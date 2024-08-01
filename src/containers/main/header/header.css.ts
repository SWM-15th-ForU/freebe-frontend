import { style } from "@vanilla-extract/css";

export const headerContainer = style({
  top: 0,
  left: 0,
  position: "fixed",
  height: 50,
  paddingLeft: 20,
  width: "100%",
  backgroundColor: "#D9D9D9",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  color: "#000000",
});

export const profileContainer = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginLeft: 30,
  gap: 10,
});

export const urlContainer = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "auto",
  marginRight: 20,
  height: "60%",
  backgroundColor: "#F5F5F5",
  paddingLeft: 20,
  paddingRight: 20,
  gap: 15,
});
