import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const editStyles = styleVariants({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  wrapper: [
    sprinkles({ borderColor: "stroke-grey" }),
    {
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      paddingBottom: 20,
    },
  ],
  box: {
    padding: 25,
    borderRadius: 8,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
  },
  image: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "flex-start",
    flex: "0 0 104px",
    marginRight: 20,
    gap: 12,
  },
  title: [texts["headline-03"], sprinkles({ color: "text-02" })],
  fieldsWrapper: {
    flex: 1,
  },
  buttonsWrapper: {
    display: "flex",
    marginLeft: "auto",
    gap: 8,
  },
});
