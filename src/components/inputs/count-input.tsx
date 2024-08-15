import Image from "next/image";
import { countInputStyles } from "./input.css";

interface CountInputProps {
  value: number;
  setValue: (newValue: number) => void;
  maxCount?: number;
  minCount?: number;
}

const CountInput = ({
  value,
  setValue,
  maxCount,
  minCount = 0,
}: CountInputProps) => {
  function handlePlus() {
    setValue(value + 1);
  }

  function handleMinus() {
    setValue(value - 1);
  }

  return (
    <div className={countInputStyles.container}>
      <button
        className={countInputStyles.button}
        type="button"
        disabled={minCount === value}
        onClick={handleMinus}
      >
        <Image
          src="/icons/components/minus.svg"
          alt="minus"
          width={20}
          height={20}
        />
      </button>
      <input
        className={countInputStyles.input}
        type="number"
        min={minCount}
        max={maxCount}
        value={value}
        onChange={(e) => setValue(parseInt(e.currentTarget.value, 10))}
      />
      <button
        className={countInputStyles.button}
        type="button"
        disabled={maxCount === value}
        onClick={handlePlus}
      >
        <Image
          src="/icons/components/plus.svg"
          alt="plus"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default CountInput;
