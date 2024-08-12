import sprinkles from "@/styles/sprinkles.css";
import { styleVariants } from "@vanilla-extract/css";

const submitStyles = styleVariants({
  container: [
    sprinkles({
      backgroundColor: "white",
    }),
    {
      padding: 20,
      paddingTop: 28,
      marginBottom: 8,
    },
  ],
  title: [
    sprinkles({
      fontSize: "headline-02",
      color: "text-02",
      fontWeight: "headline-02",
    }),
  ],
});

export default submitStyles;
