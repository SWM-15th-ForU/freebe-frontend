import sprinkles from "@/styles/sprinkles.css";
import { styleVariants } from "@vanilla-extract/css";

const submitStyles = styleVariants({
  container: [
    sprinkles({
      backgroundColor: "white",
    }),
    {
      padding: 20,
      paddingTop: 28,
      marginBottom: 8,
    },
  ],
  selectWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  calenderWrapper: [
    sprinkles({
      borderColor: "stroke-grey",
    }),
    {
      borderWidth: 0,
      borderBottomWidth: 1,
      borderStyle: "solid",
    },
  ],
  title: [
    sprinkles({
      fontSize: "headline-02",
      color: "text-02",
      fontWeight: "headline-02",
    }),
  ],
  itemTitle: [
    sprinkles({
      fontSize: "headline-03",
      fontWeight: "headline-03",
      color: "text-02",
    }),
  ],
  modalBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    backgroundColor: "black",
    opacity: 0.3,
    width: "100vw",
    height: "100vh",
  },
  modal: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 24,
  },
});

export default submitStyles;
