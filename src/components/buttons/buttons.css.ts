import { style } from "@vanilla-extract/css";

export const kakaoContainer = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  margin: 30,
  gap: 12,
  border: 0,
  width: 184,
  height: 45,
  backgroundColor: "#FEE500",
  color: "#000000",
  borderRadius: 12,
  ":hover": {
    cursor: "pointer",
  },
});

export const AddContainer = style({
  width: "100%",
  border: "dashed",
  borderRadius: 10,
  marginTop: 15,
  padding: 5,
});

export const SubmitContainer = style({
  width: "100%",
  borderRadius: 10,
  marginTop: 15,
  padding: 5,
  border: "none",
});
