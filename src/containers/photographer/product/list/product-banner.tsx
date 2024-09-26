import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Switch } from "@mantine/core";
import { CustomButton } from "@/components/buttons/common-buttons";
import { ProductResponseData } from "@/services/server/photographer/mypage/products";
import {
  deleteProduct,
  putProductStatus,
} from "@/services/client/photographer/products";
import { bannerStyles } from "../product.css";

const ProductBanner = ({
  // TODO: getProductList response에서 추가되는 이미지 받아오기
  activeStatus,
  productId,
  productTitle,
  reservationCount,
}: ProductResponseData) => {
  const router = useRouter();

  async function handleSwitchOpen() {
    await putProductStatus(
      productId,
      activeStatus === "ACTIVE" ? "INACTIVE" : "ACTIVE",
    );
    router.refresh();
  }

  return (
    <div className={bannerStyles.container}>
      <Link href={`/photographer/product/${productId}`}>
        {/* <Image src={image} alt="상품 메인 이미지" style={{ width: 70 }} /> */}
        <div className={bannerStyles.infoWrapper}>
          <div>
            <span className={bannerStyles.title}>{productTitle}</span>
            <span className={bannerStyles.content}>
              누적 예약 건수 {reservationCount}건
            </span>
          </div>
          <Image src="/icons/right.svg" alt="더보기" width={12} height={12} />
        </div>
      </Link>
      <div className={bannerStyles.controlWrapper}>
        <span>예약 활성화</span>
        <Switch
          checked={activeStatus === "ACTIVE"}
          onChange={handleSwitchOpen}
        />
        {activeStatus === "INACTIVE" && (
          <CustomButton
            size="xs"
            styleType="line"
            title="삭제"
            onClick={() => {
              deleteProduct(productId);
            }}
            style={{ marginLeft: "auto" }}
          />
        )}
      </div>
    </div>
  );
};

export default ProductBanner;
