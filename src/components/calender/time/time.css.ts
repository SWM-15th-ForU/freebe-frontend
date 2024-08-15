import sprinkles from "@/styles/sprinkles.css";
import { styleVariants } from "@vanilla-extract/css";

export const PickerStyles = styleVariants({
  list: {
    margin: 0,
    padding: 0,
    overflow: "hidden",
    width: "100%",
    height: "150px",
    overflowY: "scroll",
    position: "relative",
  },
  center: [
    sprinkles({
      backgroundColor: "lightgrey",
    }),
    {
      boxSizing: "border-box",
    },
  ],
  item: [],
});
