import sprinkles from "@/styles/sprinkles.css";
import { style, styleVariants } from "@vanilla-extract/css";

const baseText = style([
  sprinkles({
    fontSize: "body-01",
    fontWeight: "body-01",
  }),
]);

export const OptionFormsStyles = styleVariants({
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: [
    sprinkles({
      color: "text-01",
    }),
    baseText,
  ],
  price: [
    sprinkles({
      color: "text-point",
    }),
    baseText,
  ],
});
