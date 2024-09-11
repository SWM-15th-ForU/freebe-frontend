import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const statusStyles = styleVariants({
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
});
