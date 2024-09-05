import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const navbarStyle = styleVariants({
  container: {
    alignSelf: "flex-start",
    margin: 40,
    width: 240,
  },
  title: [
    texts["headline-02"],
    sprinkles({
      color: "text-02",
    }),
  ],
  tabWrapper: [
    texts["body-02"],
    sprinkles({
      borderColor: "stroke-grey",
    }),
    {
      borderTopWidth: 1,
      borderTopStyle: "solid",
      marginTop: 10,
    },
  ],
});
