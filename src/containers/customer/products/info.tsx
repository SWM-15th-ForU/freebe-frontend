"use client";

import Image from "next/image";
import { Product } from "product-types";
import { PageParams } from "route-parameters";
import { Carousel } from "@mantine/carousel";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Tabs } from "@mantine/core";
import QueryProviders from "@/containers/common/query-providers";
import { BottomButton } from "@/components/buttons/common-buttons";
import LoginButton from "@/components/buttons/login-button";
import { commonTabsStyles } from "@/styles/mantine.css";
import { formatPrice } from "@/utils/parse";
import BasicInfo from "./basic-info";
import { indicatorStyle, infoStyles, modalStyles } from "./products.css";
import NoticeList from "../notice";

const TABS_ID = {
  basic: "product-basic",
  notices: "product-notices",
};

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
            <Carousel.Slide key={index} className={infoStyles.slide}>
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
      <Tabs defaultValue={TABS_ID.basic} classNames={{ ...commonTabsStyles }}>
        <Tabs.List>
          <Tabs.Tab value={TABS_ID.basic}>상품 정보</Tabs.Tab>
          <Tabs.Tab value={TABS_ID.notices}>촬영 공지사항</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={TABS_ID.basic}>
          <BasicInfo
            items={items}
            options={options}
            basicPlace={basicPlace}
            allowPreferredPlace={allowPreferredPlace}
          />
        </Tabs.Panel>
        <Tabs.Panel value={TABS_ID.notices}>
          <div className={infoStyles.wrapper}>
            <QueryProviders>
              <NoticeList />
            </QueryProviders>
          </div>
        </Tabs.Panel>
      </Tabs>
      <BottomButton
        title="예약 시작하기"
        onClick={open}
        style={{ position: "fixed" }}
      />
    </div>
  );
};

export default ProductInfo;
