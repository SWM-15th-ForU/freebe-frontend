import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const noticeStyles = styleVariants({
  container: [
    sprinkles({ backgroundColor: "white" }),
    {
      paddingBottom: 30,
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
