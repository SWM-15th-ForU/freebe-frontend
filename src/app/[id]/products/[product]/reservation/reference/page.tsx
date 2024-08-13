"use client";

import { BottomButton } from "@/components/buttons/common-buttons";
import ReferenceGrid from "@/containers/customer/reservation/reference/grid";
import ReferenceSelected from "@/containers/customer/reservation/reference/selected";
import { usePathname, useRouter } from "next/navigation";
import { reservation } from "product-types";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const MAX_SELECT_COUNT = 3;

const ReferencePage = () => {
  const router = useRouter();

  // TODO: reference images 데이터 페칭
  const imageDatas: string[] = [
    "https://picsum.photos/300/400",
    "https://picsum.photos/280/500",
    "https://picsum.photos/200/400",
    "https://picsum.photos/400/300",
  ];

  const [imageList, setImageList] = useState<string[]>([]);
  const { setValue, watch } = useFormContext<reservation.FormType>();
  const currentPath = usePathname();

  const selectedImageList = watch("referenceImages");

  useEffect(() => {
    setImageList(imageDatas);
  }, []);

  function addSelected(target: string) {
    setValue("referenceImages", [...selectedImageList, target]);
  }

  function removeSelected(target: string) {
    const newImages = selectedImageList.filter((value) => value !== target);
    setValue("referenceImages", newImages);
  }

  function changeSelected(target: string) {
    if (selectedImageList.includes(target)) {
      removeSelected(target);
    } else if (selectedImageList.length >= MAX_SELECT_COUNT) {
      alert("더 이상 선택할 수 없습니다.");
    } else {
      addSelected(target);
    }
  }

  function getNextPath(param: string) {
    const targetPath = currentPath.split("/");
    targetPath[targetPath.length - 1] = param;
    return targetPath.join("/");
  }

  function handleNext() {
    const nextPath = getNextPath("submit");
    router.push(nextPath);
  }

  return (
    <div>
      <ReferenceSelected
        images={selectedImageList}
        onClickDelete={removeSelected}
      />
      <ReferenceGrid
        images={imageList}
        handleSelect={changeSelected}
        selectedImages={selectedImageList}
      />
      <BottomButton title="다음" onClick={handleNext} />
    </div>
  );
};

export default ReferencePage;
