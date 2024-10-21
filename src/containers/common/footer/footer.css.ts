import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const footerStyles = styleVariants({
  container: [
    sprinkles({ backgroundColor: "text-01" }),
    {
      marginTop: "auto",
      width: "100%",
      padding: "32px 60px 60px 60px",
      "@media": {
        [breakpoints.mobile]: {
          padding: "32px 20px 40px 20px",
        },
      },
    },
  ],
  wrapper: {
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "wrap",
    marginBottom: 40,
    "@media": {
      "screen and (max-width: 967px)": {
        flexDirection: "column",
      },
    },
  },
  info: {
    margin: "20px 0px 20px 0px",
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  item: {
    display: "flex",
    gap: 8,
  },
  menuWrapper: {
    display: "flex",
    flexDirection: "row",
    "@media": {
      "screen and (max-width: 967px)": {
        marginTop: 20,
      },
      [breakpoints.mobile]: {
        flexDirection: "column",
        gap: 20,
      },
    },
  },
  menu: {
    width: 180,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  title: [
    sprinkles({ color: "white" }),
    { marginBottom: 8, fontSize: 15, fontWeight: 600 },
  ],
  name: [
    sprinkles({ color: "white" }),
    { minWidth: "fit-content" },
    { fontSize: 13, fontWeight: 600 },
  ],
  content: [sprinkles({ color: "white" }), { fontSize: 13, fontWeight: 400 }],
  caption: [texts["caption-01"], sprinkles({ color: "text-04" })],
});
