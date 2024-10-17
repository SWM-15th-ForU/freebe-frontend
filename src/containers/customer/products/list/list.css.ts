import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const cardStyles = styleVariants({
  container: {
    width: "calc(calc(100% - 4px) / 2)",
    marginBottom: 10,
  },
  image: {
    position: "relative",
    width: "100%",
    aspectRatio: "1",
  },
  wrapper: {
    padding: 12,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: [
    texts["headline-02"],
    sprinkles({
      color: "text-01",
    }),
  ],
  price: [
    texts["headline-03"],
    sprinkles({
      color: "text-point",
    }),
  ],
});
