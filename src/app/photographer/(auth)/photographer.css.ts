import { styleVariants } from "@vanilla-extract/css";

export const photographerStyles = styleVariants({
  headerLayout: {
    minHeight: "100vh",
    paddingTop: 51,
  },
  body: {
    display: "flex",
  },
  content: {
    flex: 1,
    overflowX: "scroll",
  },
});
