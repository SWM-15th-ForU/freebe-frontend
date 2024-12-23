import { breakpoints } from "@/styles/breakpoints.css";
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
      "@media": {
        [breakpoints.mobile]: {
          minWidth: 0,
        },
      },
    },
  ],
  error: [
    texts["caption-01"],
    sprinkles({
      color: "pink",
    }),
    { margin: 3, display: "block" },
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
    paddingBottom: 10,

    "@media": {
      [breakpoints.mobile]: {
        height: "auto",
      },
    },
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
    "@media": {
      [breakpoints.mobile]: {
        flexDirection: "column",
        alignItems: "flex-start",
      },
    },
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
    "@media": {
      [breakpoints.mobile]: {
        flexDirection: "row",
        width: 300,
        alignItems: "flex-end",
        marginBottom: 30,
      },
    },
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
  error: [
    texts["caption-01"],
    sprinkles({
      color: "pink",
    }),
    { margin: 3, display: "block" },
  ],
  banner: {
    margin: "20px 0px",
    display: "none",
    "@media": {
      [breakpoints.mobile]: {
        display: "block",
      },
    },
  },
});

export const leaveStyles = styleVariants({
  container: {
    marginTop: 60,
    marginLeft: "auto",
  },
  wrapper: {
    width: "100%",
  },
  button: [
    texts["headline-03"],
    sprinkles({ color: "text-04" }),
    {
      background: "none",
      border: "none",
      textDecoration: "underline",
    },
  ],
  title: [
    texts["headline-02"],
    sprinkles({ color: "text-02" }),
    { minWidth: "fit-content" },
  ],
  message: [texts["headline-03"], sprinkles({ color: "text-point" })],
  list: [
    texts["body-01"],
    sprinkles({ backgroundColor: "bg-lightgrey", color: "text-02" }),
    { borderRadius: 16, padding: 10, paddingInlineStart: 30 },
  ],
  reasonWrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 0px",
    gap: 8,
  },
});
