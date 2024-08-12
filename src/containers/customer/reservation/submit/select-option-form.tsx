import Dropdown from "@/components/common/dropdown";
import { Option } from "product-types";
import submitStyles from "./submit.css";

const SelectOptionForm = ({ options }: { options: Option[] }) => {
  return (
    <div className={submitStyles.container}>
      <span className={submitStyles.title}>추가 옵션</span>
      <Dropdown datas={[]} />
    </div>
  );
};

export default SelectOptionForm;
