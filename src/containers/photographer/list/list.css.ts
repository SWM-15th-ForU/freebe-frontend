import { styleVariants } from "@vanilla-extract/css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";

export const listStyles = styleVariants({
  container: [
    {
      position: "relative",
      marginTop: 10,
      height: "fit-content",
      width: 300,
      borderRadius: 16,

      background: "linear-gradient(to bottom, #F4F8FD 0%, #E6F1FD 100%)",
    },
  ],
  wrapper: {
    margin: "0px 8px",
    padding: "8px 0px 12px 0px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  header: [{ display: "flex", alignItems: "center", gap: 6, paddingLeft: 8 }],
  title: [sprinkles({ color: "text-01" }), texts["headline-02"]],
  subtitle: [
    sprinkles({ color: "text-03" }),
    texts["headline-03"],
    { padding: "8px 4px" },
  ],
});

export const cardStyles = styleVariants({
  container: [
    sprinkles({ borderColor: "stroke-grey", backgroundColor: "white" }),
    {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      boxSizing: "border-box",
      alignItems: "center",
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
