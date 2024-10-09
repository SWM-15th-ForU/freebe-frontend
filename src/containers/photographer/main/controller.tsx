import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import { MainViewType } from "service-types";
import { MenuItem } from "@mantine/core";
import Slider from "@/components/common/slider";
import FilterProduct from "@/components/common/filter-product";
import QueryProviders from "@/containers/common/query-providers";
import { mainviewStyles } from "./main.css";

interface ControllerProps {
  view: MainViewType;
  setView: Dispatch<SetStateAction<MainViewType>>;
  selectedProducts: string[];
  setSelectedProducts: Dispatch<SetStateAction<string[]>>;
}

const Controller = ({
  view,
  setView,
  selectedProducts,
  setSelectedProducts,
}: ControllerProps) => {
  function handleChangeView(id: string) {
    if (id === "list" || id === "calender") setView(id);
  }

  function handleFilterChange(selectedName: string) {
    setSelectedProducts((prev) => {
      if (prev.includes(selectedName)) {
        return prev.filter((product) => product !== selectedName);
      }
      return [...prev, selectedName];
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
      <QueryProviders>
        <FilterProduct
          onSelect={handleFilterChange}
          selectedItems={selectedProducts}
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
        </FilterProduct>
      </QueryProviders>
    </div>
  );
};

export default Controller;
