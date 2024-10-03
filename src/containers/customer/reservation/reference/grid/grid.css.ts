import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const fileSelectStyles = styleVariants({
  container: [
    sprinkles({ backgroundColor: "bg-lightgrey" }),
    {
      width: "calc(calc(100% - 10px) / 2)",
      position: "relative",
      borderRadius: 8,
      display: "flex",
      gap: 10,
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      flex: "0 0",
      height: 100,
      objectFit: "contain",
      boxSizing: "content-box",
    },
  ],
  info: [texts["body-01"], sprinkles({ color: "text-02" })],
  input: {
    opacity: 0,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    cursor: "pointer",
  },
});
