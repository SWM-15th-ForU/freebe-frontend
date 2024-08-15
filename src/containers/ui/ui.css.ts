import { style, styleVariants } from "@vanilla-extract/css";

export const ModalStyle = style({
  borderRadius: 16,
  padding: 24,
  margin: 30,
});

export const ModalStyles = styleVariants({
  background: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    overflowY: "hidden",
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  content: {
    zIndex: 10,
    borderRadius: 16,
    padding: 24,
    margin: 20,
    flex: 1,
    backgroundColor: "white",
    boxShadow: "0px 5px 15px 0px #00000025",
  },
});
