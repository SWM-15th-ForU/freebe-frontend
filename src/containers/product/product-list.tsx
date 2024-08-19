import Link from "next/link";
import { Status } from "product-types";
import { Body15SB } from "@/components/texts/texts";
import ProductBanner from "./list/product-banner";
import { listBody, listDiv, listHead, listStyles } from "./product.css";

interface ProductListProps {
  productDatas: Parameters<typeof ProductBanner>[0][];
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
        <Body15SB>{titles[status]}</Body15SB>
        {status === "ACTIVE" && (
          <Link href="/photographer/new-product" className={listStyles.add}>
            추가
          </Link>
        )}
      </div>
      <div className={listBody}>
        {productDatas.map((data) => (
          <ProductBanner key={data.productId} {...data} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
