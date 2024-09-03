import sprinkles from "@/styles/sprinkles.css";
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
    sprinkles({
      color: "blue",
      fontSize: "headline-03",
      fontWeight: "headline-03",
    }),
    {
      display: "flex",
      alignItems: "center",
      gap: 8,
      textDecoration: "none",
    },
  ],
});
