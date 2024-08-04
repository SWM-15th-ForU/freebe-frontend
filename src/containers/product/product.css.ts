import { style } from "@vanilla-extract/css";

export const formDiv = style({
  width: "50%",
  margin: "auto",
  paddingTop: 50,
  alignSelf: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 15,
});

export const bannerDiv = style({
  backgroundColor: "#A5A5A5",
  borderRadius: 10,
  padding: 10,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
  width: 200,
  height: 100,
});

export const listDiv = style({
  backgroundColor: "#F5F5F5",
  borderRadius: 10,
  padding: 20,
  margin: 20,
  width: 700,
});

export const infoContainer = style({
  flex: 1,
  backgroundColor: "#D9D9D9",
});

export const listHead = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  gap: 300,
  marginBottom: 20,
});

export const listBody = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
});

export const textInput = style({
  border: 0,
  width: "80%",
});

export const inputBox = style({
  backgroundColor: "#D9D9D9",
  borderRadius: 10,
  padding: 10,
  marginTop: 20,
});

export const headerStyle = {
  container: style({
    position: "fixed",
    zIndex: 3,
    backgroundColor: "#fff",
    top: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "8vw",
    padding: 25,
    flexDirection: "row",
    justifyContent: "flex-start",
    overflow: "scroll",
    msOverflowStyle: "none",
    "::-webkit-scrollbar": {
      display: "none",
    },
  }),
};

export const iconStyle = {
  container: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  image: style({
    backgroundColor: "#D9D9D9",
    borderRadius: "100%",
    width: "70px",
    aspectRatio: "1",
  }),
  title: style({
    margin: 0,
  }),
};
