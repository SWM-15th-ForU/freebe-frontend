import sprinkles from "@/styles/sprinkles.css";
import { styleVariants } from "@vanilla-extract/css";

export const cardStyles = styleVariants({
  container: {
    width: "calc(calc(100% - 4px) / 2)",
    marginBottom: 20,
  },
  image: {
    position: "relative",
    width: "100%",
    aspectRatio: "1",
  },
  wrapper: {
    padding: 12,
    display: "flex",
    justifyContent: "space-between",
  },
  title: [
    sprinkles({
      fontSize: "headline-02",
      fontWeight: "headline-02",
      color: "text-01",
    }),
  ],
});
