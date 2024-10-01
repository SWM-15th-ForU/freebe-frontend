import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ReservationSearchParams } from "reservation-types";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Pagination } from "@mantine/core";
import Slider from "@/components/common/slider";
import { getPreviousReservationList } from "@/services/client/photographer/reservations";
import { paginationStyles } from "@/styles/mantine.css";
import ListItem from "./item/list-item";
import GalleryItem from "./item/gallery-item";
import { viewStyles } from "./previous.css";

const View = ({ from, keyword, page, status, to }: ReservationSearchParams) => {
  const [viewType, setViewType] = useState<"gallery" | "list">("list");
  const {
    data: { reservationList, totalPages },
  } = useSuspenseQuery({
    queryKey: ["reservation", { from, to, keyword, page, status }],
    initialData: { reservationList: [], totalPages: 1 },
    staleTime: 0,
    queryFn: () =>
      getPreviousReservationList({ from, to, keyword, page, status }),
    retry: false,
  });

  function handleSwitchViewType(id: string) {
    if (id === "list" || id === "gallery") setViewType(id);
  }

  const router = useRouter();
  const searchParams = useSearchParams();

  function handlePageChange(newPage: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
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
        value={page}
        total={totalPages}
        onChange={handlePageChange}
        classNames={paginationStyles}
      />
    </div>
  );
};

export default View;
