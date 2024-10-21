"use client";

import { CustomerDetails } from "reservation-types";
import { Tabs } from "@mantine/core";
import { commonTabsStyles } from "@/styles/mantine.css";
import Status from "./details/status";
import Info from "./details/info";
import NoticeList from "./details/infos/notice";
import { detailStyles } from "./reservation.css";

const TABS_ID = {
  basic: "reservation-basic",
  notice: "reservation-notice",
};

const ReservationDetails = ({ details }: { details: CustomerDetails }) => {
  return (
    <div className={detailStyles.container}>
      <Status {...details} />
      <Tabs defaultValue={TABS_ID.basic} classNames={{ ...commonTabsStyles }}>
        <Tabs.List>
          <Tabs.Tab value={TABS_ID.basic}>예약 정보</Tabs.Tab>
          <Tabs.Tab value={TABS_ID.notice}>촬영 공지사항</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={TABS_ID.basic}>
          <Info {...details} />
        </Tabs.Panel>
        <Tabs.Panel value={TABS_ID.notice}>
          <NoticeList {...details} />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default ReservationDetails;
