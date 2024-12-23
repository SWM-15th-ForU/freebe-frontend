import { breakpoints } from "@/styles/breakpoints.css";
import { styleVariants } from "@vanilla-extract/css";

export const customedCarouselStyles = styleVariants({
  root: {
    position: "relative",
    width: "100%",
    minWidth: 700,
    maxWidth: 800,
    paddingBottom: 30,

    "@media": {
      [breakpoints.mobile]: {
        minWidth: 200,
      },
    },
  },
  viewport: {
    height: "100%",
    aspectRatio: "5",
  },
  container: {
    height: "100%",
  },
  slide: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
});

export const noticeBannerStyles = styleVariants({
  image: {
    borderRadius: 24,
    objectFit: "cover",
  },
});
