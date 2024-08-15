"use client";

import GridImage from "@/components/images/grid-image";
import { MasonryGrid } from "@egjs/react-grid";

const GRID_COLUMN_COUNT = 2;

const ReferenceGrid = ({
  images,
  selectedImages,
  handleSelect,
}: {
  images: string[];
  selectedImages: string[];
  handleSelect: (value: string) => void;
}) => {
  return (
    <div style={{ margin: 20, paddingBottom: 70 }}>
      <MasonryGrid
        column={GRID_COLUMN_COUNT}
        gap={{ horizontal: 10 }}
        align="center"
        className="container"
      >
        {images.map((image, index) => (
          <GridImage
            key={index}
            handleClick={() => {
              handleSelect(image);
            }}
            url={image}
            selected={selectedImages.includes(image)}
          />
        ))}
      </MasonryGrid>
    </div>
  );
};

export default ReferenceGrid;
