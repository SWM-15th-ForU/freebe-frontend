import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const guideStyles = styleVariants({
  textWrapper: {
    padding: "0px 10px 10px 10px",
    display: "flex",
    gap: 8,
  },
  text: [
    texts["caption-01"],
    sprinkles({ color: "text-02" }),
    { marginTop: 0, lineHeight: "20px" },
  ],
  title: [texts["headline-03"], sprinkles({ color: "text-point" })],
});

export const editStyles = styleVariants({
  container: [
    sprinkles({ backgroundColor: "white" }),
    {
      borderRadius: 16,
      padding: 20,
    },
  ],
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  infoWrapper: [
    texts["headline-03"],
    sprinkles({ color: "text-point" }),
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      padding: 60,
    },
  ],
  title: [texts["headline-03"], sprinkles({ color: "text-02" })],
  name: [texts["headline-03"], sprinkles({ color: "text-point" })],
  input: [
    texts["headline-03"],
    sprinkles({ color: "text-02" }),
    {
      background: "none",
      borderRadius: 0,
      border: "none",
      ":focus-within": { outline: "none" },
    },
  ],
  controller: {
    display: "flex",
    alignItems: "center",
  },
  chipWrapper: {
    marginTop: 16,
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    alignItems: "center",
  },
});

export const accordionStyles = styleVariants({
  root: [
    sprinkles({ backgroundColor: "white" }),
    {
      margin: "30px 0px",
      borderTop: "1px solid #dee2e6",
      flex: 1,
    },
  ],
});
