import sprinkles from "@/styles/sprinkles.css";
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
      fontSize: "headline-03",
      fontWeight: "headline-03",
      color: "text-02",
    }),
    {
      marginLeft: 8,
    },
  ],
  link: [
    sprinkles({
      fontSize: "body-02",
      fontWeight: "body-02",
      color: "text-04",
    }),
    { marginLeft: 20, textDecoration: "none" },
  ],
});
