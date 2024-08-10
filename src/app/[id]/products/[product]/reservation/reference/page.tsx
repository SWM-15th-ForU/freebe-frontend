"use client";

import ReferenceGrid from "@/containers/customer/reservation/reference-grid";
import { reservation } from "product-types";
import { useEffect, useState } from "react";

const ReferencePage = () => {
  const imageDatas: reservation.ImageListType[] = [
    {
      url: "https://picsum.photos/300/400",
      selected: false,
    },
    {
      url: "https://picsum.photos/280/500",
      selected: false,
    },
    {
      url: "https://picsum.photos/200/400",
      selected: false,
    },
    {
      url: "https://picsum.photos/400/300",
      selected: false,
    },
  ];

  const [imageList, setImageList] = useState<reservation.ImageListType[]>([]);

  useEffect(() => {
    setImageList(imageDatas);
  }, []);

  function changeSelected(targetIndex: number) {
    setImageList((list) => {
      return list.map((image, index) =>
        index === targetIndex
          ? { selected: !image.selected, url: image.url }
          : image,
      );
    });
  }

  return (
    <div>
      <ReferenceGrid images={imageList} handleSelect={changeSelected} />
    </div>
  );
};

export default ReferencePage;
