import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const mainviewStyles = styleVariants({
  container: {
    width: "100%",
    height: "calc(100vh - 51px)",
    padding: "32px 40px 80px 40px",
  },
  controller: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  link: [
    texts["headline-03"],
    sprinkles({
      color: "blue",
    }),
    {
      display: "flex",
      alignItems: "center",
      gap: 8,
      textDecoration: "none",
    },
  ],
});
