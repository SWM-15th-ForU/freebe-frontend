"use client";

import { useState } from "react";
import Image from "next/image";
import { FilterItemType } from "common-types";
import { Menu } from "@mantine/core";
import { useSuspenseQuery } from "@tanstack/react-query";
import QueryProviders from "@/containers/common/query-providers";
import { getProductTitles } from "@/services/client/photographer/products";
import Check from "../inputs/check";
import Search from "./search";
import { chipStyles, filterStyles } from "./common.css";

interface FilterProductProps {
  selectedItems: string[];
  onSelect: (title: string) => void;
  children?: React.ReactNode;
}

const FilterItem = ({
  item,
  selected,
  onClickItem,
}: {
  item: FilterItemType;
  onClickItem: () => void;
  selected: boolean;
}) => {
  return (
    <button className={filterStyles.item} onClick={onClickItem} type="button">
      <Check onPress={() => {}} value={selected} />
      {item.name}
    </button>
  );
};

const FilterList = ({
  selectedItems,
  onSelect,
}: Omit<FilterProductProps, "children">) => {
  const [search, setSearch] = useState("");
  const { data, error } = useSuspenseQuery({
    queryKey: ["productTitle"],
    initialData: [],
    staleTime: 0,
    queryFn: () => getProductTitles(),
    retry: false,
  });

  if (error) {
    throw error;
  }

  function getSearchList() {
    return search.length > 0
      ? data.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        )
      : data;
  }

  return (
    <div className={filterStyles.list}>
      <Search value={search} setValue={setSearch} />
      {getSearchList().map((item) => {
        return (
          <FilterItem
            key={item.id}
            item={item}
            selected={selectedItems.includes(item.name)}
            onClickItem={() => onSelect(item.name)}
          />
        );
      })}
    </div>
  );
};

const FilterProduct = ({
  onSelect,
  selectedItems,
  children,
}: FilterProductProps) => {
  return (
    <Menu position="top-start">
      <Menu.Target>
        <button
          type="button"
          className={
            selectedItems.length > 0
              ? chipStyles.selectedContainer
              : chipStyles.normal
          }
        >
          <Image
            src={
              selectedItems.length > 0
                ? "/icons/filter.svg"
                : "/icons/filter-blue.svg"
            }
            alt="필터"
            width={24}
            height={24}
          />
          <span>필터</span>
          {selectedItems.length > 0 && (
            <span className={chipStyles.caption}>{selectedItems.length}</span>
          )}
        </button>
      </Menu.Target>
      <Menu.Dropdown classNames={{ dropdown: filterStyles.dropdown }}>
        <QueryProviders>
          <FilterList selectedItems={selectedItems} onSelect={onSelect} />
        </QueryProviders>
        {children && <Menu.Divider />}
        {children}
      </Menu.Dropdown>
    </Menu>
  );
};

export default FilterProduct;
