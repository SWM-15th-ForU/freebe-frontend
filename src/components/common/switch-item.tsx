import { switchStyles } from "./common.css";

interface SwitchItemInterface {
  value: {
    selected: string;
    unselected: string;
  };
  selected: boolean;
  onSwitch: () => void;
  asChip?: boolean;
}

const SwitchItem = ({
  value,
  onSwitch,
  selected,
  asChip,
}: SwitchItemInterface) => {
  return (
    <div
      role="presentation"
      onClick={onSwitch}
      className={switchStyles.container}
    >
      {(!asChip || selected) && (
        <div
          className={selected ? switchStyles.selected : switchStyles.unselected}
        >
          <span>{value.selected}</span>
        </div>
      )}
      {(!asChip || !selected) && (
        <div
          className={selected ? switchStyles.unselected : switchStyles.selected}
        >
          <span>{value.unselected}</span>
        </div>
      )}
    </div>
  );
};

export default SwitchItem;
