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
  divider: [
    sprinkles({ borderColor: "stroke-grey" }),
    {
      borderTopWidth: 1,
      borderTopStyle: "solid",
      paddingTop: 10,
      marginTop: 10,
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
    flexWrap: "wrap",
    justifyContent: "flex-end",
    columnGap: "1ch",
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

export const noticeStyles = styleVariants({
  container: [
    sprinkles({ backgroundColor: "white" }),
    {
      padding: "28px 20px 80px 20px",
    },
  ],
  list: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 40,
  },
  header: {
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
  },
  info: [texts["headline-03"], sprinkles({ color: "text-03" })],
  wrapper: [
    sprinkles({ borderColor: "stroke-grey" }),
    {
      paddingTop: 40,
      borderTopStyle: "solid",
      borderTopWidth: 1,
    },
  ],
  title: [texts["headline-02"], sprinkles({ color: "text-02" })],
  content: [
    texts["body-02"],
    sprinkles({
      color: "text-01",
    }),
    { marginTop: 10, marginBottom: 0, whiteSpace: "pre-wrap", width: "100%" },
  ],
});
