import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const loginStyles = styleVariants({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "auto",
  },
  title: [
    texts["headline-02"],
    sprinkles({
      color: "blue",
    }),
  ],
  subtitle: [
    texts["headline-02"],
    sprinkles({
      color: "text-01",
    }),
  ],
});
