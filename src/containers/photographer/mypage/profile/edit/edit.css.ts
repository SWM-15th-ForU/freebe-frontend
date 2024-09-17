import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const linkStyles = styleVariants({
  container: [
    sprinkles({ borderColor: "stroke-grey", backgroundColor: "white" }),
    {
      padding: 20,
      borderRadius: 8,
      borderWidth: 1,
      borderStyle: "solid",
      display: "flex",
      flexDirection: "column",
    },
  ],
  wrapper: {
    display: "flex",
    gap: 28,
  },
  name: [
    sprinkles({ borderColor: "stroke-grey", color: "text-02" }),
    {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      minWidth: "fit-content",
      "::placeholder": {
        color: "#849CAA",
      },
      ":focus": {
        outline: "none",
        borderBottomColor: "#007AFF",
      },
    },
  ],
});

export const editStyles = styleVariants({
  container: {
    flex: 1,
    height: "100%",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
    minWidth: 380,
    paddingBottom: 60,
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
    minWidth: "fit-content",
  },
  link: {
    paddingTop: 20,
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
  linksWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginTop: 8,
    marginBottom: 20,
  },
  buttonsWrapper: {
    display: "flex",
    marginLeft: "auto",
    gap: 8,
  },
});
