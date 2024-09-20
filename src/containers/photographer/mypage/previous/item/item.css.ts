import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

const baseContainer = style([
  sprinkles({
    borderColor: "stroke-grey",
  }),
  {
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
]);

const baseText = style([
  texts["caption-01"],
  {
    height: 14,
    alignItems: "center",
    display: "flex",
    gap: 4,
  },
]);

const baseStatus = style([
  texts["button-02"],
  sprinkles({ color: "text-03" }),
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 88,
    height: 36,
    borderRadius: 4,
    marginLeft: "auto",
  },
]);

export const commonItemStyles = styleVariants({
  status: [baseStatus, sprinkles({ backgroundColor: "bg-lightgrey" })],
  cancel: [baseStatus, { backgroundColor: "#EBEEF2" }],
  titleBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  subtitle: [sprinkles({ color: "text-03" }), texts["headline-03"]],
  title: [sprinkles({ color: "text-02" }), texts["headline-01"]],
  name: [sprinkles({ color: "text-03" })],
  content: [sprinkles({ color: "text-02" })],
});

export const listItemStyles = styleVariants({
  container: [
    baseContainer,
    sprinkles({
      backgroundColor: "white",
    }),
  ],
  cancel: [baseContainer, { backgroundColor: "#F7F7F7" }],
  wrapper: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
  date: [baseText],
  borderedDate: [
    sprinkles({ borderColor: "stroke-grey" }),
    baseText,
    {
      paddingRight: 8,
      borderRightWidth: 1,
      borderRightStyle: "solid",
      marginRight: 8,
    },
  ],
  thumbnail: { marginRight: 12, backgroundColor: "#D9D9D9" },
  information: [baseText, { marginLeft: "auto" }],
});

export const galleryItemStyles = styleVariants({
  container: [
    sprinkles({
      borderColor: "stroke-grey",
      backgroundColor: "white",
    }),
    {
      position: "relative",
      width: "40%",
      borderRadius: 8,
      borderWidth: 1,
      borderStyle: "solid",
      display: "flex",
      flexDirection: "column",
    },
  ],
  image: {
    position: "relative",
    width: "100%",
    height: 200,
    backgroundColor: "#D9D9D9",
    borderTopRightRadius: 8,

    borderTopLeftRadius: 8,
  },
  body: {
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  wrapper: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
  },
  date: [baseText],
  information: [baseText],
});
