import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const noticeStyles = styleVariants({
  container: {
    padding: "20px 20px 80px 20px",
    overflowY: "scroll",
  },
  list: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 40,
  },
  header: {
    display: "flex",
    alignItems: "center",
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
  title: [texts["headline-02"], sprinkles({ color: "text-point" })],
  content: [
    texts["body-01"],
    sprinkles({ color: "text-01" }),
    { marginTop: 10, marginBottom: 0, whiteSpace: "pre-wrap", width: "100%" },
  ],
});
