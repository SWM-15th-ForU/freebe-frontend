import sprinkles from "@/styles/sprinkles.css";
import { styleVariants } from "@vanilla-extract/css";

export const statusStyles = styleVariants({
  container: [
    sprinkles({ backgroundColor: "white" }),
    { padding: "48px 47px 40px 47px" },
  ],
});
