"use client";

import Profile from "@/components/common/profile";
import ServiceFooter from "@/components/customer/service-footer";
import { CustomButton } from "@/components/buttons/common-buttons";
import { LinkType } from "profile-types";
import { sheetStyles } from "./main.css";

interface InfoSheetProps {
  id: string;
  message: string;
  links: LinkType[];
}

const InfoSheet = ({ id, links, message }: InfoSheetProps) => {
  return (
    <div className={sheetStyles.container}>
      <div className={sheetStyles.header} />
      <div className={sheetStyles.content}>
        <div className={sheetStyles.divider} style={{ paddingTop: 0 }}>
          <Profile id="instagram" img="https://picsum.photos/200/200" />
        </div>
        <div className={sheetStyles.divider}>
          <span className={sheetStyles.message}>{message}</span>
        </div>
        <div className={sheetStyles.buttonWrapper}>
          <div className={sheetStyles.scrollArea}>
            {links.map((link) => {
              return (
                <CustomButton
                  key={link.name}
                  title={link.name}
                  size="sm"
                  styleType="primary"
                />
              );
            })}
            {links.map((link) => {
              return (
                <CustomButton
                  key={link.name}
                  title={link.name}
                  size="md"
                  styleType="secondary"
                />
              );
            })}
          </div>
        </div>
        <ServiceFooter />
      </div>
    </div>
  );
};

export default InfoSheet;
