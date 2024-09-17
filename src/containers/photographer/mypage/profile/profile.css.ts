import sprinkles from "@/styles/sprinkles.css";
import { styleVariants } from "@vanilla-extract/css";

export const profileStyles = styleVariants({
  container: {
    display: "flex",
    width: "auto",

    height: "calc(100vh - 178.5px)",
    gap: 24,
    position: "relative",
    overflowX: "scroll",
  },
  preview: [
    sprinkles({
      borderColor: "blue",
    }),
    {
      width: 350,
      flexShrink: 0,
      position: "relative",
      height: "100%",
      borderWidth: 2,
      borderStyle: "solid",
      display: "flex",
      flexDirection: "column",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      overflowY: "hidden",
      overflowX: "hidden",
    },
  ],
});
