import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Switch } from "@mantine/core";
import { responseHandler } from "@/services/common/error";
import { CustomButton } from "@/components/buttons/common-buttons";
import { ProductResponseData } from "@/services/server/photographer/mypage/products";
import {
  deleteProduct,
  putProductStatus,
} from "@/services/client/photographer/products";
import popToast from "@/components/common/toast";
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
    await responseHandler(
      putProductStatus(
        productId,
        activeStatus === "ACTIVE" ? "INACTIVE" : "ACTIVE",
      ),
      () => {
        popToast("활성화 상태가 변경되었습니다.");
        router.refresh();
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
        <CustomButton
          size="xs"
          styleType="line"
          title="삭제"
          onClick={() => {
            deleteProduct(productId);
          }}
          style={{ marginLeft: "auto", paddingLeft: 15, paddingRight: 15 }}
        />
      </div>
    </div>
  );
};

export default ProductBanner;
