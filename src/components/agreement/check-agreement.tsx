import Link from "next/link";
import Checkbox from "../inputs/check";
import { checkAgreementStyles } from "./agreement.css";

interface CheckAgreementProps {
  checked: boolean;
  title: string;
  link?: { name: string; path: string };
  onPressCheckbox: () => void;
}

const CheckAgreement = ({
  checked,
  onPressCheckbox,
  title,
  link,
}: CheckAgreementProps) => {
  return (
    <div className={checkAgreementStyles.wrapper}>
      <Checkbox value={checked} onPress={onPressCheckbox} />
      <span className={checkAgreementStyles.title}>{title}</span>
      {link && (
        <Link href={link.path} className={checkAgreementStyles.link}>
          {link.name}
        </Link>
      )}
    </div>
  );
};

export default CheckAgreement;
