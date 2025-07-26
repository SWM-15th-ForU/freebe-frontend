import Image from "next/image";
import Link from "next/link";
import { SERVICE_LINKS } from "@/constants/common/common";
import { footerStyles } from "./footer.css";

const ServiceFooter = () => {
  const SERVICE_INFO = [
    { name: "이메일", content: "official@freebe.co.kr" },
    {
      name: "주소",
      content: "경기도 김포시 김포한강10로133번길 127, 530-AC03호",
    },
    {
      name: "사업자등록번호",
      content: "385-13-02383",
    },
  ];

  return (
    <div className={footerStyles.container}>
      <div className={footerStyles.wrapper}>
        <div>
          <Image
            src="/icons/freebe-logo-white.svg"
            width={111}
            height={24}
            alt="free:be"
          />
          <div className={footerStyles.info}>
            {SERVICE_INFO.map((item) => {
              return (
                <div className={footerStyles.item} key={item.name}>
                  <span className={footerStyles.name}>{item.name}</span>
                  <span className={footerStyles.content}>{item.content}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={footerStyles.menuWrapper}>
          <div className={footerStyles.menu}>
            <span className={footerStyles.title}>이용안내</span>
            <Link href={SERVICE_LINKS.notice} target="_blank">
              <span className={footerStyles.content}>공지사항</span>
            </Link>
          </div>
          <div className={footerStyles.menu}>
            <span className={footerStyles.title}>서비스 약관</span>
            <Link href={SERVICE_LINKS.serviceAgreement} target="_blank">
              <span className={footerStyles.content}>서비스 이용약관</span>
            </Link>
            <Link href={SERVICE_LINKS.privacyAgreement} target="_blank">
              <span className={footerStyles.content}>개인정보처리방침</span>
            </Link>
          </div>
        </div>
      </div>
      <span className={footerStyles.caption}>
        © 2024 free:be. All rights reserved.
      </span>
      <span className={footerStyles.caption}>
        프리비는 통신판매중개자로서 통신판매의 당사자가 아니며 각 상품의 주문,
        거래 및 환불 등에 관한 의무와 책임은 각 판매자에게 있습니다.
      </span>
    </div>
  );
};

export default ServiceFooter;
