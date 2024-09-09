import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MainViewType } from "service-types";
import { MenuItem } from "@mantine/core";
import Filter from "@/components/common/filter";
import Slider from "@/components/common/slider";
import { mainviewStyles } from "./main.css";

interface FilterItem {
  id: string;
  name: string;
  selected: boolean;
}

interface ControllerProps {
  view: MainViewType;
  setView: Dispatch<SetStateAction<MainViewType>>;
}

const Controller = ({ view, setView }: ControllerProps) => {
  const [filterList, setFilterList] = useState<FilterItem[]>([
    { id: "1", name: "상품 1", selected: false },
    { id: "2", name: "상품 2", selected: false },
    { id: "3", name: "상품 3", selected: false },
  ]);

  function handleChangeView(id: string) {
    if (id === "list" || id === "calender") setView(id);
  }

  function handleFilterChange(itemId: string) {
    setFilterList((prevList) => {
      return prevList.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        return item;
      });
    });
  }

  return (
    <div className={mainviewStyles.controller}>
      <Slider
        items={[
          { id: "list", icon: "list", name: "리스트" },
          { id: "calender", icon: "calender", name: "캘린더" },
        ]}
        defaultId={view}
        onChange={handleChangeView}
      />
      <Filter
        items={filterList}
        onSelect={handleFilterChange}
        selectedItems={filterList.filter((item) => item.selected)}
        hasSearch
      >
        <MenuItem style={{ marginTop: 16 }}>
          <Link
            href="/photographer/new-product"
            className={mainviewStyles.link}
          >
            <Image src="/icons/plus.svg" width={12} height={12} alt="추가" />
            상품 추가하기
          </Link>
        </MenuItem>
      </Filter>
    </div>
  );
};

export default Controller;
