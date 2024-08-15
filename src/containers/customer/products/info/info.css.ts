import sprinkles from "@/styles/sprinkles.css";
import { style, styleVariants } from "@vanilla-extract/css";

const baseContent = style([
  sprinkles({
    fontSize: "body-02",
    fontWeight: "body-02",
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
    sprinkles({
      fontSize: "headline-03",
      fontWeight: "headline-03",
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
