"use client";

import { FormImage, ProductFormdata } from "product-types";
import ProductForm from "./form";
import { formStyles } from "./product.css";

const ProductDetails = ({
  currentDetails,
  currentImage,
}: {
  currentDetails: ProductFormdata;
  currentImage: FormImage[];
}) => {
  async function saveNewDetails(data: ProductFormdata, images: FormImage[]) {
    console.log(data, images);
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
