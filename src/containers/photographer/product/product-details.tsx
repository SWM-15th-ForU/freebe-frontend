"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FormImage, ProductFormdata } from "product-types";
import { CustomButton } from "@/components/buttons/common-buttons";
import popToast from "@/components/common/toast";
import { responseHandler } from "@/services/common/error";
import { putProductDetails } from "@/services/client/photographer/products";
import ProductForm from "./form";
import { formStyles } from "./product.css";

const ProductDetails = ({
  currentDetails,
  currentImage,
  productId,
}: {
  currentDetails: ProductFormdata;
  currentImage: FormImage[];
  productId: string;
}) => {
  const router = useRouter();
  const pathName = usePathname();
  const [isEditing, setIsEditing] = useState(false);

  async function saveNewDetails(data: ProductFormdata, images: FormImage[]) {
    await responseHandler(
      putProductDetails(data, images, productId),
      () => {
        setIsEditing(false);
        popToast("수정이 완료되었습니다.");
        router.refresh();
        router.replace(pathName);
      },
      (message) => {
        popToast(
          "다시 시도해 주세요.",
          message || "수정에 실패했습니다.",
          true,
        );
      },
    );
  }

  return (
    <div className={formStyles.container}>
      <div className={formStyles.head}>
        <span className={formStyles.title}>{currentDetails.title}</span>
        {!isEditing && (
          <CustomButton
            onClick={() => setIsEditing(true)}
            styleType="line"
            size="md"
            title="수정하기"
          />
        )}
      </div>
      <ProductForm
        formBase={currentDetails}
        imageBase={currentImage}
        handleSendForm={saveNewDetails}
        isEditing={isEditing}
      />
    </div>
  );
};

export default ProductDetails;
