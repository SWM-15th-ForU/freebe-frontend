import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const guideStyles = styleVariants({
  textWrapper: {
    padding: 10,
    display: "flex",
    gap: 8,
  },
  text: [
    texts["caption-01"],
    sprinkles({ color: "text-02" }),
    { marginTop: 0, lineHeight: "20px" },
  ],
  title: [texts["headline-03"], sprinkles({ color: "text-point" })],
  chipWrapper: [
    sprinkles({ backgroundColor: "white" }),
    {
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
      alignItems: "center",
      borderRadius: 16,
      padding: 20,
    },
  ],
});
