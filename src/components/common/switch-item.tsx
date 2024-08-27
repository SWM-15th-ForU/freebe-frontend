import { switchStyles } from "./common.css";

interface SwitchItemInterface {
  value: {
    selected: string;
    unselected: string;
  };
  selected: boolean;
  onSwitch: () => void;
}

const SwitchItem = ({ value, onSwitch, selected }: SwitchItemInterface) => {
  return (
    <div
      role="presentation"
      onClick={onSwitch}
      className={switchStyles.container}
    >
      <div
        className={selected ? switchStyles.selected : switchStyles.unselected}
      >
        <span>{value.selected}</span>
      </div>
      <div
        className={selected ? switchStyles.unselected : switchStyles.selected}
      >
        <span>{value.unselected}</span>
      </div>
    </div>
  );
};

export default SwitchItem;
