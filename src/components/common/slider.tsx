import Image from "next/image";
import { CSSProperties, useEffect, useState } from "react";
import { switchStyles } from "./common.css";

interface SliderItemProps {
  id: string;
  icon: string;
  name: string;
}

interface SliderProps {
  items: SliderItemProps[];
  defaultId: string;
  onChange: (id: string) => void;
  container?: CSSProperties;
}

const SliderItem = ({
  icon,
  id,
  name,
  onClick,
  selected,
}: SliderItemProps & { onClick: () => void; selected: boolean }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={selected ? switchStyles.selected : switchStyles.unselected}
    >
      <Image
        height={24}
        width={24}
        alt={id}
        src={selected ? `/icons/${icon}-blue.svg` : `/icons/${icon}.svg`}
      />
      <span>{name}</span>
    </button>
  );
};

const Slider = ({ defaultId, onChange, items, container }: SliderProps) => {
  const [selectedId, setSelectedId] = useState(defaultId);

  function handleClickItem(targetId: string) {
    setSelectedId(targetId);
  }

  useEffect(() => {
    onChange(selectedId);
  }, [selectedId, onChange]);

  return (
    <div className={switchStyles.borderContainer} style={{ ...container }}>
      {items.map((item) => (
        <SliderItem
          key={item.id}
          onClick={() => handleClickItem(item.id)}
          selected={selectedId === item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export default Slider;
