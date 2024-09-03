import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const checkAgreementStyles = styleVariants({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 6,
    paddingBottom: 6,
  },
  title: [
    sprinkles({
      color: "text-02",
    }),
    {
      marginLeft: 8,
    },
    texts["headline-03"],
  ],
  link: [
    texts["body-02"],
    sprinkles({
      color: "text-04",
    }),
    { marginLeft: 20, textDecoration: "none" },
  ],
});
