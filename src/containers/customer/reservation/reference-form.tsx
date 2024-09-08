"use client";

import { usePathname, useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import { reservation } from "product-types";
import { BottomButton } from "@/components/buttons/common-buttons";
import ReferenceGrid from "@/containers/customer/reservation/reference/grid";
import ReferenceSelected from "@/containers/customer/reservation/reference/selected";

const MAX_SELECT_COUNT = 3;

const ReferenceForm = ({ images }: { images: string[] }) => {
  const router = useRouter();
  const { setValue, watch } = useFormContext<reservation.FormType>();
  const currentPath = usePathname();

  const selectedImageList = watch("referenceImages");

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
        images={images}
        handleSelect={changeSelected}
        selectedImages={selectedImageList}
      />
      <BottomButton title="다음" onClick={handleNext} />
    </div>
  );
};

export default ReferenceForm;
