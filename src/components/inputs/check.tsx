import Image from "next/image";
import { checkboxStyles } from "./input.css";

interface CheckProps {
  value: boolean;
  onPress: () => void;
}

const Check = ({ onPress, value }: CheckProps) => {
  return (
    <div
      role="presentation"
      onClick={onPress}
      className={value ? checkboxStyles.selected : checkboxStyles.unSelected}
    >
      {value && (
        <div style={{ width: "70%", height: "70%", position: "relative" }}>
          <Image src="/icons/components/check.svg" alt="check" fill />
        </div>
      )}
    </div>
  );
};

export default Check;
