import sprinkles from "@/styles/sprinkles.css";
import { style, styleVariants } from "@vanilla-extract/css";

const baseText = style([
  sprinkles({
    fontSize: "body-01",
    fontWeight: "body-01",
  }),
]);

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
    sprinkles({
      color: "text-01",
      fontSize: "body-01",
      fontWeight: "body-01",
    }),
  ],
  wrapper: {
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  price: [
    sprinkles({
      color: "text-01",
      fontSize: "headline-02",
      fontWeight: "headline-02",
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
    sprinkles({
      fontSize: "headline-01",
      fontWeight: "headline-01",
      color: "blue",
    }),
  ],
});
