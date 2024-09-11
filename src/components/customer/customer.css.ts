import { styleVariants } from "@vanilla-extract/css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";

export const footerStyles = styleVariants({
  container: {},
  text: [texts["caption-02"], sprinkles({ color: "text-04" })],
});
