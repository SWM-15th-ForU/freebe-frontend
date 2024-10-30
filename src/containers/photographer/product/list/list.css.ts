import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const customedModalStyles = styleVariants({
  content: [
    sprinkles({ borderColor: "stroke-grey", backgroundColor: "white" }),
    {
      maxWidth: 500,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,
      boxShadow: "0px 10px 25px 0px #00000026",
      position: "absolute",
    },
  ],
  title: [texts["headline-02"], sprinkles({ color: "text-point" })],
  header: {
    justifyContent: "center",
  },
  close: {
    position: "absolute",
    right: 10,
  },
  body: {
    padding: "0px 40px 20px 40px",
  },
});

export const modalStyles = styleVariants({
  content: [
    texts["headline-03"],
    sprinkles({ color: "text-01" }),
    { marginBottom: 20, display: "block" },
  ],
});
