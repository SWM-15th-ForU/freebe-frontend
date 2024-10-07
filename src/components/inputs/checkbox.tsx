import Link from "next/link";
import Checkbox from "./check";
import { checkboxStyles } from "./input.css";

interface CheckBoxProps {
  checked: boolean;
  title?: string;
  link?: { name: string; path: string };
  onPress: () => void;
  children?: React.ReactNode;
}

const CheckBox = ({
  checked,
  onPress,
  title,
  link,
  children,
}: CheckBoxProps) => {
  return (
    <div className={checkboxStyles.container}>
      <button
        type="button"
        onClick={onPress}
        className={checkboxStyles.wrapper}
      >
        <Checkbox value={checked} onPress={() => {}} />
        {children}
        <span>{title}</span>
      </button>
      {link && (
        <Link href={link.path} className={checkboxStyles.link} target="_blank">
          {link.name}
        </Link>
      )}
    </div>
  );
};

export default CheckBox;
