"use client";

import { useRouter } from "next/navigation";
import { FormImage, ProductFormdata } from "product-types";
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

  async function saveNewDetails(data: ProductFormdata, images: FormImage[]) {
    await putProductDetails(data, images, productId);
    router.refresh();
  }

  return (
    <div className={formStyles.container}>
      <span className={formStyles.title}>{currentDetails.title}</span>
      <ProductForm
        formBase={currentDetails}
        imageBase={currentImage}
        handleSendForm={saveNewDetails}
        isEditable
      />
    </div>
  );
};

export default ProductDetails;
