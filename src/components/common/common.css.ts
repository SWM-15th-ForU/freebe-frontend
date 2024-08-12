import sprinkles from "@/styles/sprinkles.css";
import { styleVariants } from "@vanilla-extract/css";

export const DropdownStyles = styleVariants({
  container: [
    sprinkles({
      borderColor: "stroke-grey",
    }),
    {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      height: 56,
      borderWidth: 1,
      borderStyle: "solid",
      margin: "24px 0px",
      padding: "20px 24px",
    },
  ],
  placeholder: [
    sprinkles({
      color: "text-02",
      fontSize: "body-01",
      fontWeight: "body-01",
    }),
  ],
  icon: [sprinkles({ color: "skyblue" })],
});
