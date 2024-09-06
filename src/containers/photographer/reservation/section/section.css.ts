import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const sectionStyles = styleVariants({
  container: [
    sprinkles({
      borderColor: "stroke-grey",
    }),
    {
      padding: "40px 0px",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
    },
  ],
  wrapper: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    columnGap: "20px",
  },
  title: [texts["headline-02"], sprinkles({ color: "text-02" })],
});

export const fieldStyles = style({
  minWidth: "45%",
  flex: 1,
});
