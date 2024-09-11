"use client";

import Profile from "@/components/common/profile";
import ServiceFooter from "@/components/customer/service-footer";
import { CustomButton } from "@/components/buttons/common-buttons";
import { LinkType, Photographer } from "profile-types";
import { sheetStyles } from "./main.css";

const InfoSheet = ({
  defaultLinks,
  linkInfos,
  message,
}: Pick<Photographer, "linkInfos" | "message"> & {
  defaultLinks: LinkType[];
}) => {
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
            {defaultLinks.map((link) => {
              return (
                <CustomButton
                  key={link.name}
                  title={link.name}
                  size="sm"
                  styleType="primary"
                  link={link.src}
                />
              );
            })}
            {linkInfos.map((link) => {
              return (
                <CustomButton
                  key={link.name}
                  title={link.name}
                  size="md"
                  styleType="secondary"
                  link={link.src}
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
