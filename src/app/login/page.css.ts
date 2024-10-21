import sprinkles from "@/styles/sprinkles.css";
import { styleVariants } from "@vanilla-extract/css";

export const loginPageStyles = styleVariants({
  background: [
    sprinkles({ backgroundColor: "bg-lightgrey" }),
    {
      padding: "101px 0px 50px 0px",
      position: "relative",
      minWidth: 350,

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
    },
  ],
  layout: [
    {
      minHeight: "100vh",
      position: "relative",
      display: "flex",
      "::-webkit-scrollbar": {
        display: "none",
      },
    },
  ],
});
