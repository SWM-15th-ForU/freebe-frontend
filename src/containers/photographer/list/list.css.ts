import { styleVariants } from "@vanilla-extract/css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";

export const cardStyles = styleVariants({
  container: [
    sprinkles({ borderColor: "stroke-grey" }),
    {
      position: "relative",
      display: "flex",
      flexDirection: "row",

      alignItems: "center",
      width: 300,
      borderRadius: 8,
      borderWidth: 1,
      borderStyle: "solid",
      padding: 12,
      height: 94,
      cursor: "pointer",
    },
  ],

  infoWrapper: [
    sprinkles({ borderColor: "stroke-grey" }),
    {
      borderLeftWidth: 1,
      borderLeftStyle: "solid",
      paddingLeft: 12,
      marginLeft: 12,
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: 10,
    },
  ],
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: 20,
  },
  title: [texts["headline-03"], sprinkles({ color: "text-02" })],
  content: [
    texts["caption-01"],
    sprinkles({ color: "text-02" }),
    { display: "flex", alignItems: "center", gap: 5 },
  ],
});

export const coverStyles = styleVariants({
  wrapper: {
    height: "100%",
    width: "60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  main: [texts["headline-01"]],
  sub: [texts["body-02"]],
  caption: [texts["caption-01"], sprinkles({ color: "text-03" })],
});
