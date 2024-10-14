"use client";

import Image from "next/image";
import { Product } from "product-types";
import { PageParams } from "route-parameters";
import { Carousel } from "@mantine/carousel";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { BottomButton } from "@/components/buttons/common-buttons";
import LoginButton from "@/components/buttons/login-button";
import { formatPrice } from "@/utils/parse";
import ProductItem from "./info/product-item";
import ProductOption from "./info/product-option";
import { indicatorStyle, infoStyles, modalStyles } from "./products.css";

const ProductInfo = ({
  items,
  options,
  subtitle,
  basicPlace,
  allowPreferredPlace,
  title,
  basicPrice,
  images,
  profileName,
  productId,
}: Product & Pick<PageParams, "productId" | "profileName">) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className={infoStyles.container}>
      <Modal
        opened={opened}
        onClose={close}
        centered
        classNames={{
          body: modalStyles.body,
          content: modalStyles.content,
          header: modalStyles.header,
        }}
      >
        <span className={modalStyles.title}>예약을 시작하시겠어요?</span>
        <span className={modalStyles.info}>
          작가님께 신청자 정보를 간편하게 전달하기 위해 로그인을 해 주세요!
        </span>
        <LoginButton
          roleType="customer"
          destination={`${profileName}/products/${productId}/reservation/reference`}
        />
      </Modal>
      <Carousel
        withIndicators
        withControls={false}
        classNames={{ indicator: indicatorStyle }}
      >
        {images.map((image, index) => {
          return (
            <Carousel.Slide
              key={index}
              style={{
                position: "relative",
                width: "100%",
                height: "100vw",
                backgroundColor: "#d9d9d9",
              }}
            >
              <Image src={image} alt="" fill style={{ objectFit: "cover" }} />
            </Carousel.Slide>
          );
        })}
      </Carousel>
      <div className={infoStyles.wrapper}>
        <div className={infoStyles.headWrapper}>
          <span className={infoStyles.title}>{title}</span>
          <span className={infoStyles.price}>
            {formatPrice(basicPrice)}
            {basicPrice !== 0 && "~"}
          </span>
        </div>
        <p className={infoStyles.content}>{subtitle}</p>
      </div>
      <div className={infoStyles.wrapper}>
        <div className={infoStyles.itemsWrapper}>
          <ProductItem
            key="basic-place"
            title="촬영 장소"
            content={basicPlace}
            description={
              allowPreferredPlace ? "신청 시 희망 장소 요청 가능" : ""
            }
          />
          {items.map((item, index) => {
            return <ProductItem key={index} {...item} />;
          })}
        </div>
      </div>
      <div className={infoStyles.wrapper}>
        <p className={infoStyles.subtitle}>추가 옵션</p>
        <div className={infoStyles.itemsWrapper}>
          {options.map((option, index) => {
            return <ProductOption key={index} {...option} />;
          })}
        </div>
      </div>
      <BottomButton
        title="예약 시작하기"
        onClick={open}
        style={{ position: "fixed" }}
      />
    </div>
  );
};

export default ProductInfo;
