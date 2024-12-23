import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Switch } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Loader from "@/components/common/loader";
import { responseHandler } from "@/services/common/error";
import { CustomButton } from "@/components/buttons/common-buttons";
import { ProductResponseData } from "@/services/server/photographer/mypage/products";
import {
  deleteProduct,
  putProductStatus,
} from "@/services/client/photographer/products";
import popToast from "@/components/common/toast";
import { bannerStyles } from "../product.css";
import DeleteModal from "./delete-modal";
import DisableModal from "./disable-modal";

const ProductBanner = ({
  activeStatus,
  productId,
  productTitle,
  reservationCount,
  representativeImage,
}: ProductResponseData) => {
  const router = useRouter();
  const [deleteOpened, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);
  const [disableOpened, { open: openDisable, close: closeDisable }] =
    useDisclosure(false);
  const [switchLoading, setSwitchLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  async function handleSwitchOpen() {
    closeDisable();
    setSwitchLoading(true);
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
    setSwitchLoading(false);
  }

  async function handleClickDelete() {
    closeDelete();
    setDeleteLoading(true);
    await responseHandler(
      deleteProduct(productId),
      () => {
        popToast("상품이 삭제되었습니다.");
        router.refresh();
      },
      (message) => {
        popToast(
          "다시 시도해 주세요.",
          message || "삭제에 실패했습니다.",
          true,
        );
      },
    );
    setDeleteLoading(false);
  }

  return (
    <div className={bannerStyles.container}>
      <Link href={`/photographer/product/${productId}`}>
        <div className={bannerStyles.imageWrapper}>
          <Image
            className={bannerStyles.image}
            src={representativeImage}
            fill
            alt="상품 메인 이미지"
          />
        </div>
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
        {switchLoading ? (
          <Loader />
        ) : (
          <Switch
            checked={activeStatus === "ACTIVE"}
            onChange={
              activeStatus === "ACTIVE" ? openDisable : handleSwitchOpen
            }
          />
        )}
        <CustomButton
          size="xs"
          styleType="line"
          title="삭제"
          loading={deleteLoading}
          onClick={openDelete}
          style={{ marginLeft: "auto", paddingLeft: 15, paddingRight: 15 }}
        />
      </div>
      <DeleteModal
        close={closeDelete}
        handleDelete={handleClickDelete}
        opened={deleteOpened}
        productTitle={productTitle}
      />
      <DisableModal
        close={closeDisable}
        handleDisable={handleSwitchOpen}
        opened={disableOpened}
        productTitle={productTitle}
      />
    </div>
  );
};

export default ProductBanner;
