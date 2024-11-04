import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const fileSelectStyles = styleVariants({
  container: [
    sprinkles({ borderColor: "blue", backgroundColor: "white" }),
    {
      width: "100%",
      position: "relative",
      borderRadius: 8,
      cursor: "pointer",
      borderStyle: "dashed",
      borderWidth: 2,
      paddingTop: 8,
      paddingBottom: 8,
      marginBottom: 20,
      ":hover": {
        filter: "brightness(0.92);",
      },
      ":active": {
        filter: "brightness(0.92);",
      },
    },
  ],
  info: [
    texts["headline-02"],
    sprinkles({ color: "blue" }),
    { width: "100%", textAlign: "center", display: "block" },
  ],
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
