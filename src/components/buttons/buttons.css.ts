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
