import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const scheduleStyles = styleVariants({
  container: [
    sprinkles({ backgroundColor: "white" }),
    {
      marginTop: 20,
      borderRadius: 16,
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 20,
    },
  ],
  head: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: [sprinkles({ color: "text-02" }), texts["headline-02"]],
  body: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    paddingTop: 16,
    gap: 16,
    columnGap: 30,
  },
});

export const timeblockStyles = styleVariants({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    alignItems: "center",
  },
  text: [sprinkles({ color: "text-02" }), texts["headline-03"]],
});
