import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

const baseContent = style([
  texts["body-02"],
  sprinkles({
    color: "text-01",
  }),
  { marginLeft: "auto" },
]);

const infoItemStyles = styleVariants({
  wrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  title: [
    texts["headline-03"],
    sprinkles({
      color: "text-03",
    }),
  ],
  content: [baseContent, { width: "70%" }],
  price: [
    baseContent,
    {
      textAlign: "right",
    },
  ],
});

export default infoItemStyles;
