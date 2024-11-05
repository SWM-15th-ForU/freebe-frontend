"use client";

import Link from "next/link";
import { Status } from "product-types";
import { sendGAEvent } from "@next/third-parties/google";
import { CustomButton } from "@/components/buttons/common-buttons";
import { ProductResponseData } from "@/services/server/photographer/mypage/products";
import ProductBanner from "./list/product-banner";
import { listStyles } from "./product.css";

interface ProductListProps {
  productDatas: ProductResponseData[];
  status: Status;
  height?: number;
}

const ProductList = ({ productDatas, status }: ProductListProps) => {
  const titles: { [key in Status]: string } = {
    ACTIVE: "예약 가능 상품",
    INACTIVE: "대기 중인 상품",
  };

  return (
    <div className={listStyles.div}>
      <div className={listStyles.head}>
        {titles[status]}
        {status === "ACTIVE" && (
          <Link href="/photographer/new-product">
            <CustomButton
              onClick={() => sendGAEvent("event", "start_product_register")}
              title="추가"
              size="sm"
              styleType="primary"
              style={{ paddingLeft: 15, paddingRight: 15 }}
            />
          </Link>
        )}
      </div>
      <div className={listStyles.body}>
        {productDatas
          .filter((data) => data.activeStatus === status)
          .map((data) => (
            <ProductBanner key={data.productId} {...data} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
