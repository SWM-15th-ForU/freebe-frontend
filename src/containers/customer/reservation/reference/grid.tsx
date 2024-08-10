"use client";

import GridImage from "@/components/images/grid-image";
import { MasonryGrid } from "@egjs/react-grid";
import { reservation } from "product-types";

const GRID_COLUMN_COUNT = 2;

const ReferenceGrid = ({
  images,
  handleSelect,
}: {
  images: reservation.ImageListType[];
  handleSelect: (index: number) => void;
}) => {
  return (
    <div style={{ margin: 20 }}>
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
              handleSelect(index);
            }}
            {...image}
          />
        ))}
      </MasonryGrid>
    </div>
  );
};

export default ReferenceGrid;
