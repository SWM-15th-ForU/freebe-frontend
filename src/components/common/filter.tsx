import { useState } from "react";
import Image from "next/image";
import { Menu } from "@mantine/core";
import Checkbox from "../inputs/checkbox";
import Search from "./search";
import { chipStyles, filterStyles } from "./common.css";

type Item = { id: string; name: string; selected: boolean };

interface FilterProps {
  items: Item[];
  selectedItems: { id: string }[];
  onSelect: (id: string) => void;
  hasSearch?: boolean;
  children?: React.ReactNode;
}

const FilterItem = ({
  item,
  onClickItem,
}: {
  item: Item;
  onClickItem: () => void;
}) => {
  return (
    <button className={filterStyles.item} onClick={onClickItem} type="button">
      <Checkbox onPress={() => {}} value={item.selected} />
      {item.name}
    </button>
  );
};

const Filter = ({
  items,
  onSelect,
  selectedItems,
  hasSearch,
  children,
}: FilterProps) => {
  const [search, setSearch] = useState("");

  function getSearchList() {
    return search.length > 0
      ? items.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        )
      : items;
  }

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
        {hasSearch && <Search value={search} setValue={setSearch} />}
        <div className={filterStyles.list}>
          {(hasSearch ? getSearchList() : items).map((item) => {
            return (
              <FilterItem
                key={item.id}
                item={item}
                onClickItem={() => onSelect(item.id)}
              />
            );
          })}
        </div>
        {children && <Menu.Divider />}
        {children}
      </Menu.Dropdown>
    </Menu>
  );
};

export default Filter;
