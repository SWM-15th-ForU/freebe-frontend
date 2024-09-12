import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const navbarStyle = styleVariants({
  container: {
    alignSelf: "flex-start",
    padding: 30,
    width: 300,
    height: "100%",
    backgroundColor: "white",
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

export const preparingStyle = styleVariants({
  container: [
    sprinkles({ color: "text-point" }),
    texts["headline-02"],
    {
      width: "100%",
      height: "100%",
      display: "flex",
      padding: 100,
      justifyContent: "center",
    },
  ],
});
