import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const detailStyles = styleVariants({
  container: [
    sprinkles({ backgroundColor: "white" }),
    {
      padding: "48px 47px 40px 47px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  ],
  title: [texts["headline-02"], sprinkles({ color: "text-point" })],
  message: [texts["body-02"], sprinkles({ color: "text-03" })],
  chips: {
    display: "flex",
    gap: 10,
    marginTop: 24,
    height: 30,
  },
  body: [
    sprinkles({
      backgroundColor: "bg-lightgrey",
    }),
    {
      flex: 1,
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },
  ],
});

export const cancelStyles = styleVariants({
  title: [texts["headline-02"], sprinkles({ color: "text-02" })],
  message: [texts["headline-03"], sprinkles({ color: "text-point" })],
});