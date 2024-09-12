import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const infoStyles = styleVariants({
  container: [
    sprinkles({
      backgroundColor: "white",
    }),
    {
      padding: "28px 20px",
      borderRadius: 16,
    },
  ],
  wrapper: {
    marginTop: 15,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  item: {
    display: "flex",
    alignItems: "top",
    justifyContent: "space-between",
    gap: 20,
  },
  schedule: {
    display: "flex",
    gap: "1ch",
  },
  title: [texts["headline-02"], sprinkles({ color: "text-02" })],
  name: [
    texts["headline-03"],
    sprinkles({ color: "text-03" }),
    { minWidth: 60 },
  ],
  content: [
    texts["body-02"],
    sprinkles({ color: "text-01" }),
    { textAlign: "end" },
  ],
  article: [
    texts["body-02"],
    sprinkles({ color: "text-01" }),
    { width: "100%" },
  ],
  price: [texts["headline-02"], sprinkles({ color: "blue" })],
});
