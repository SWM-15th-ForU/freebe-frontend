import sprinkles from "@/styles/sprinkles.css";
import { styleVariants } from "@vanilla-extract/css";

export const loginPageStyles = styleVariants({
  background: [
    {
      padding: "101px 0px 50px 0px",
      position: "relative",
      width: "100vw",
      minWidth: 350,

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
    },
  ],
  layout: [
    sprinkles({ backgroundColor: "bg-lightgrey" }),
    {
      width: "100vw",
      minHeight: "100vh",
      position: "relative",
      display: "flex",
    },
  ],
});
