"use client";

import Profile from "@/components/common/profile";
import BottomSheet from "@/components/common/bottom-sheet";
import ServiceFooter from "@/components/customer/service-footer";
import { CustomButton } from "@/components/buttons/common-buttons";
import { LinkType, Photographer } from "profile-types";
import { sheetStyles } from "./main.css";

const InfoSheet = ({
  defaultLinks,
  linkInfos,
  profileImg,
  message,
  profileName,
  preview,
}: Pick<
  Photographer,
  "linkInfos" | "message" | "profileImg" | "profileName"
> & {
  defaultLinks: LinkType[];
  preview?: boolean;
}) => {
  return (
    <BottomSheet>
      <div className={sheetStyles.content}>
        <div className={sheetStyles.divider} style={{ paddingTop: 0 }}>
          <Profile id={profileName} img={profileImg} />
        </div>
        <div className={sheetStyles.divider}>
          <span className={sheetStyles.message}>{message}</span>
        </div>
        <div
          className={sheetStyles.buttonWrapper}
          style={{ pointerEvents: preview ? "none" : "auto" }}
        >
          {defaultLinks.map((link) => {
            return (
              <CustomButton
                key={link.name}
                title={link.name}
                size="md"
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
        <ServiceFooter />
      </div>
    </BottomSheet>
  );
};

export default InfoSheet;
