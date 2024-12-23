import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

const baseText = style([texts["body-01"]]);

export const modalStyles = styleVariants({
  content: {
    borderRadius: 16,
    padding: "0px 10px 10px 10px",
  },
  header: {
    padding: 30,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 16px",
    justifyContent: "space-between",
    gap: 10,
  },
  title: [
    texts["headline-02"],
    sprinkles({
      color: "text-point",
    }),
  ],
  info: [
    texts["body-02"],
    sprinkles({
      color: "text-02",
    }),
  ],
  close: {
    position: "absolute",
    top: 25,
    right: 10,
  },
});

export const errorStyle = style([
  texts["caption-01"],
  sprinkles({
    color: "pink",
  }),
  { margin: 3, display: "block", position: "static" },
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
  titleWrapper: {
    display: "flex",
    gap: 6,
    alignItems: "center",
  },
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
    padding: "16px 20px",
    height: 56,
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
    marginBottom: 10,
  },
  subtitle: [
    texts["headline-03"],
    sprinkles({
      color: "text-02",
    }),
  ],
  price: [
    texts["headline-03"],
    sprinkles({
      color: "blue",
    }),
  ],
  total: [
    texts["headline-02"],
    sprinkles({
      color: "blue",
    }),
  ],
  agreementWrapper: {
    marginTop: 20,
    paddingTop: 15,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
});
