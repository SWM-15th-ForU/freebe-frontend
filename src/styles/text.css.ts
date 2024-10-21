import { styleVariants } from "@vanilla-extract/css";
import sprinkles from "./sprinkles.css";

export const texts = styleVariants({
  "headline-01": [
    sprinkles({
      fontSize: {
        desktop: "xl",
        mobile: "xxl",
      },
      fontWeight: "semibold",
    }),
  ],
  "headline-02": [
    sprinkles({
      fontSize: "md",
      fontWeight: "semibold",
    }),
  ],
  "headline-03": [
    sprinkles({
      fontSize: "xs",
      fontWeight: "semibold",
    }),
  ],
  "body-01": [
    sprinkles({
      fontSize: {
        desktop: "xs",
        mobile: "md",
      },
      fontWeight: {
        desktop: "regular",
        mobile: "medium",
      },
    }),
  ],
  "body-02": [
    sprinkles({
      fontSize: "xs",
      fontWeight: "medium",
    }),
  ],
  "button-01": [
    sprinkles({
      fontSize: {
        desktop: "sm",
        mobile: "md",
      },
      fontWeight: "semibold",
    }),
  ],
  "button-02": [
    sprinkles({
      fontSize: {
        desktop: "xxs",
        mobile: "xs",
      },
      fontWeight: "semibold",
    }),
  ],
  "caption-01": [
    sprinkles({
      fontSize: "xxs",
      fontWeight: "medium",
    }),
  ],
  "caption-02": [
    sprinkles({
      fontSize: "sm",
      fontWeight: "medium",
    }),
  ],
});
