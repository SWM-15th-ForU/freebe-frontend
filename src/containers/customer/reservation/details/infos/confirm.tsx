"use client";

import Link from "next/link";
import Image from "next/image";
import { CustomerDetails } from "reservation-types";
import { AGREEMENT_LINKS } from "@/constants/common/agreement";
import { formatPrice } from "@/utils/parse";
import { infoStyles } from "./infos.css";

// TODO: 작가 profileName 조회 필요
const Confirm = ({ totalPrice }: Pick<CustomerDetails, "totalPrice">) => {
  return (
    <div className={infoStyles.container}>
      <span className={infoStyles.price}>총 {formatPrice(totalPrice)}</span>
      <div className={infoStyles.wrapper}>
        <Link href="/id/notices">
          <div className={infoStyles.item}>
            <span className={infoStyles.name}>작가 공지사항 확인하기</span>
            <Image
              src="/icons/right.svg"
              alt="바로가기"
              height={18}
              width={18}
            />
          </div>
        </Link>
        <Link href={AGREEMENT_LINKS.service}>
          <div className={infoStyles.item}>
            <span className={infoStyles.name}>서비스 약관 확인하기</span>
            <Image
              src="/icons/right.svg"
              alt="바로가기"
              height={18}
              width={18}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Confirm;
