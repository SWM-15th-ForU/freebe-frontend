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
  width: 200,
  height: 100,
});

export const listDiv = style({
  backgroundColor: "#F5F5F5",
  borderRadius: 10,
  padding: 20,
  margin: 20,
  width: 700,
});

export const infoContainer = style({
  flex: 1,
  backgroundColor: "#D9D9D9",
});

export const listHead = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  gap: 300,
  marginBottom: 20,
});

export const listBody = style({
  display: "flex",
  flexWrap: "wrap",
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
