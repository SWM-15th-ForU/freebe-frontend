import sprinkles from "@/styles/sprinkles.css";
import { styleVariants } from "@vanilla-extract/css";

export const DropdownStyles = styleVariants({
  area: {
    position: "relative",
  },
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
  list: [
    sprinkles({ borderColor: "stroke-grey", backgroundColor: "white" }),
    {
      zIndex: 5,
      width: "100%",
      position: "absolute",
      top: 60,
      borderWidth: 1,
      borderRadius: 8,
      borderStyle: "solid",
      boxShadow: "0px 10px 25px 0px #00000026",
    },
  ],
  listItems: [
    {
      padding: "16px 20px",
      height: 56,
    },
  ],
});
