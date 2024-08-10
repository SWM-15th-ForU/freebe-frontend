"use client";

import { BottomButton } from "@/components/buttons/common-buttons";
import ReferenceGrid from "@/containers/customer/reservation/reference/grid";
import ReferenceSelected from "@/containers/customer/reservation/reference/selected";
import { useRouter } from "next/navigation";
import { reservation } from "product-types";
import { useEffect, useState } from "react";

const MAX_SELECT_COUNT = 3;

const ReferencePage = () => {
  const router = useRouter();
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
  const [selectedImageList, setSelectedImageList] = useState<
    reservation.SelectedImageListType[]
  >([]);

  useEffect(() => {
    setImageList(imageDatas);
  }, []);

  function addSelected(targetIndex: number) {
    setSelectedImageList((list) => {
      list.push({ index: targetIndex, ...imageList[targetIndex] });
      return list;
    });
  }

  function removeSelected(targetIndex: number) {
    setSelectedImageList((list) => {
      return list.filter((image) => image.index !== targetIndex);
    });
  }

  function changeSelected(targetIndex: number) {
    if (imageList[targetIndex].selected) {
      removeSelected(targetIndex);
      setImageList((list) => {
        return list.map((image, index) =>
          index === targetIndex ? { selected: false, url: image.url } : image,
        );
      });
    } else if (selectedImageList.length >= MAX_SELECT_COUNT) {
      alert("더 이상 선택할 수 없습니다.");
    } else {
      addSelected(targetIndex);
      setImageList((list) => {
        return list.map((image, index) =>
          index === targetIndex ? { selected: true, url: image.url } : image,
        );
      });
    }
  }

  function handleNext() {
    router.push("");
  }

  return (
    <div>
      <ReferenceSelected
        images={selectedImageList}
        onClickDelete={changeSelected}
      />
      <ReferenceGrid images={imageList} handleSelect={changeSelected} />
      <BottomButton title="다음" onClick={handleNext} />
    </div>
  );
};

export default ReferencePage;
