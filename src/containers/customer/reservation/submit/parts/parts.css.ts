import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

const baseText = style([texts["body-01"]]);

export const optionControllerStyles = styleVariants({
  container: [
    sprinkles({
      borderColor: "stroke-grey",
    }),
    {
      marginTop: 24,
      borderBottomStyle: "solid",
      borderBottomWidth: 1,
      paddingBottom: 24,
    },
  ],
  lastContainer: { marginTop: 24 },
  title: [
    texts["body-01"],
    sprinkles({
      color: "text-01",
    }),
  ],
  wrapper: {
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  price: [
    texts["headline-02"],
    sprinkles({
      color: "text-01",
    }),
    {
      marginLeft: "auto",
      marginRight: 8,
    },
  ],
});

export const optionFormsStyles = styleVariants({
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: [
    sprinkles({
      color: "text-01",
    }),
    baseText,
  ],
  price: [
    sprinkles({
      color: "text-point",
    }),
    baseText,
  ],
  controllerWrapper: {
    position: "relative",
  },
});

export const priceFormStyles = styleVariants({
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: [
    texts["headline-01"],
    sprinkles({
      color: "blue",
    }),
  ],
});
