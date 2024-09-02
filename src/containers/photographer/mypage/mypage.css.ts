import sprinkles from "@/styles/sprinkles.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const navbarStyle = styleVariants({
  container: {
    alignSelf: "flex-start",
    margin: 40,
    width: 240,
  },
  title: [
    sprinkles({
      fontSize: "headline-02",
      fontWeight: "headline-02",
      color: "text-02",
    }),
  ],
  tabWrapper: [
    sprinkles({
      borderColor: "stroke-grey",
      fontSize: "body-02",
      fontWeight: "body-02",
    }),
    {
      borderTopWidth: 1,
      borderTopStyle: "solid",
      marginTop: 10,
    },
  ],
});
