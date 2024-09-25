import React, { useState } from "react";
import Image from "next/image";
import { imageStackStyles } from "./image-stack.css";

const ImageStack = ({ images }: { images: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className={imageStackStyles.container}>
      <button
        onClick={handlePrev}
        className={imageStackStyles.buttonWrapper}
        type="button"
      >
        <div className={imageStackStyles.prev}>
          <Image width={8} height={13} alt="prev" src="/icons/left-blue.svg" />
          <span className={imageStackStyles.text}>Prev</span>
        </div>
      </button>
      <div className={imageStackStyles.stack}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className={`${imageStackStyles.image} ${index === activeIndex ? imageStackStyles.visibleImage : imageStackStyles.hiddenImage}`}
            alt={`${index}`}
          />
        ))}
      </div>
      <button
        onClick={handleNext}
        className={imageStackStyles.buttonWrapper}
        type="button"
      >
        <div className={imageStackStyles.next}>
          <span className={imageStackStyles.text}>Next</span>
          <Image
            width={8}
            height={13}
            alt="prev"
            src="/icons/left-blue.svg"
            style={{ transform: "rotate(180deg)" }}
          />
        </div>
      </button>
    </div>
  );
};

export default ImageStack;
