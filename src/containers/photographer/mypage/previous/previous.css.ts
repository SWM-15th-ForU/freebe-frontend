import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const layoutStyles = styleVariants({
  container: [
    sprinkles({ backgroundColor: "bg-lightgrey" }),
    {
      padding: 40,
      position: "relative",
      height: "auto",
      overflowY: "scroll",
      flexGrow: 1,

      "@media": {
        [breakpoints.mobile]: {
          padding: "24px 20px",
        },
      },
    },
  ],
  header: {
    height: 40,
    display: "flex",
    alignItems: "center",
    "@media": {
      [breakpoints.mobile]: {
        height: "fit-content",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
      },
    },
  },
  search: {
    display: "flex",
    position: "relative",
    gap: 10,
    height: "100%",
    marginLeft: "auto",
    "@media": {
      [breakpoints.mobile]: {
        margin: 0,
        width: "100%",
      },
    },
  },
  title: [
    texts["headline-02"],
    sprinkles({
      color: "text-02",
    }),
    {
      display: "block",
    },
  ],
  body: {
    width: "100%",
    paddingTop: 20,
    position: "relative",
  },
  content: [
    sprinkles({ backgroundColor: "white" }),
    {
      marginTop: 20,
      width: "100%",

      borderRadius: 16,
    },
  ],
});

export const viewStyles = styleVariants({
  container: {
    width: "100%",
    padding: 24,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
  },
  title: [texts["headline-02"], sprinkles({ color: "text-02" })],
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  gallery: {
    width: "100%",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    justifyContent: "space-between",
    columnGap: 14,
    rowGap: 24,
  },
  list: {
    display: "flex",
    width: "100%",
    position: "relative",
    flexDirection: "column",
    gap: 8,
  },
});

export const filterStyles = styleVariants({
  container: [
    sprinkles({ backgroundColor: "white" }),
    {
      width: "100%",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      borderRadius: 16,
      gap: 20,
    },
  ],
  wrapper: {
    position: "relative",
    display: "flex",

    width: "fit-content",
    gap: 10,
    alignItems: "center",
  },
  chips: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    alignItems: "center",
  },
  title: [
    sprinkles({ color: "text-02" }),
    texts["headline-03"],
    { marginRight: 8, minWidth: "fit-content" },
  ],
});
