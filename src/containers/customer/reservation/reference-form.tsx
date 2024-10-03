"use client";

import { usePathname, useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import { reservation } from "product-types";
import { BottomButton } from "@/components/buttons/common-buttons";
import popToast from "@/components/common/toast";
import ReferenceGrid from "@/containers/customer/reservation/reference/grid";
import ReferenceSelected from "@/containers/customer/reservation/reference/selected";
import { reservationStyles } from "./reservation.css";

const MIN_SELECT_COUNT = 1;
const MAX_SELECT_COUNT = 3;

const ReferenceForm = ({ images }: { images: string[] }) => {
  const router = useRouter();
  const { setValue, watch } = useFormContext<reservation.FormType>();
  const currentPath = usePathname();

  const selectedImageList = watch("referenceImages");

  const addImage = (url: string, file?: File) => {
    const currentImages = selectedImageList || [];
    setValue("referenceImages", [...currentImages, { url, file }]);
  };

  function removeSelected(targetIndex: number) {
    const updatedImages = [...selectedImageList];
    updatedImages.splice(targetIndex, 1);
    setValue("referenceImages", updatedImages);
  }

  function changeSelected(target: string) {
    const index = selectedImageList.map((image) => image.url).indexOf(target);
    if (index >= 0) {
      removeSelected(index);
    } else if (selectedImageList.length >= MAX_SELECT_COUNT) {
      popToast("더 이상 선택할 수 없습니다.", "", true);
    } else {
      addImage(target);
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
    <div className={reservationStyles.container}>
      <ReferenceSelected
        images={selectedImageList}
        onClickDelete={removeSelected}
      />
      <ReferenceGrid
        images={images}
        handleSelect={changeSelected}
        selectedImages={selectedImageList.map((image) => image.url)}
        handleAdd={addImage}
      />
      <BottomButton
        title="다음"
        onClick={handleNext}
        disabled={selectedImageList.length < MIN_SELECT_COUNT}
      />
    </div>
  );
};

export default ReferenceForm;
