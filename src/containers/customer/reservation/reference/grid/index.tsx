"use client";

import GridImage from "@/components/images/grid-image";
import { MasonryGrid } from "@egjs/react-grid";
import FileSelect from "./file-select";

const GRID_COLUMN_COUNT = 2;

const ReferenceGrid = ({
  images,
  selectedImages,
  handleSelect,
  handleAdd,
}: {
  images: string[];
  selectedImages: string[];
  handleSelect: (url: string) => void;
  handleAdd: (url: string, file?: File) => void;
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
        {selectedImages.length < 3 && <FileSelect handleAdd={handleAdd} />}
      </MasonryGrid>
    </div>
  );
};

export default ReferenceGrid;
