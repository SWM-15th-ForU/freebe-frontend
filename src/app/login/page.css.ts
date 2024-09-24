import sprinkles from "@/styles/sprinkles.css";
import { styleVariants } from "@vanilla-extract/css";

export const loginPageStyles = styleVariants({
  background: [
    sprinkles({ backgroundColor: "bg-lightgrey" }),
    {
      position: "relative",
      width: "100vw",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  ],
});
