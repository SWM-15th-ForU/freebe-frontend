import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ReservationList } from "reservation-types";
import { Pagination } from "@mantine/core";
import Slider from "@/components/common/slider";
import { getPreviousReservationList } from "@/services/client/photographer/reservations";
import { paginationStyles } from "@/styles/mantine.css";
import ListItem from "./item/list-item";
import GalleryItem from "./item/gallery-item";
import { viewStyles } from "./previous.css";

const View = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activePage, setActivePage] = useState(1);
  const [viewType, setViewType] = useState<"gallery" | "list">("list");
  const [reservationList, setReservationList] = useState<ReservationList[]>([]);

  useEffect(() => {
    const page = searchParams.get("page");
    setActivePage(Number(page) || 1);
  }, [searchParams]);

  function handlePageChange(newPage: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  }

  function handleSwitchViewType(id: string) {
    if (id === "list" || id === "gallery") setViewType(id);
  }

  function renderItem() {
    return reservationList.map((item) => {
      return viewType === "list" ? (
        <ListItem key={item.reservationId} {...item} />
      ) : (
        <GalleryItem key={item.reservationId} {...item} />
      );
    });
  }

  return (
    <div className={viewStyles.container}>
      <div className={viewStyles.header}>
        <span className={viewStyles.title}>총 {reservationList.length}건</span>
        <Slider
          defaultId={viewType}
          onChange={handleSwitchViewType}
          items={[
            { icon: "list", name: "리스트", id: "list" },
            { icon: "gallery", name: "갤러리", id: "gallery" },
          ]}
        />
      </div>
      <div className={viewStyles[viewType]}>{renderItem()}</div>
      <Pagination
        value={activePage}
        total={3}
        onChange={handlePageChange}
        classNames={paginationStyles}
      />
    </div>
  );
};

export default View;
