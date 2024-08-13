import Dropdown from "@/components/common/dropdown";
import { Option } from "product-types";
import PartLayout from "../part-layout";
import { OptionFormsStyles } from "./parts.css";

const OptionItem = ({ title, price }: Option) => {
  return (
    <div className={OptionFormsStyles.wrapper}>
      <span className={OptionFormsStyles.title}>{title}</span>
      <span className={OptionFormsStyles.price}>{price || "무료 옵션"}</span>
    </div>
  );
};

const SelectOptionForm = ({ options }: { options: Option[] }) => {
  return (
    <PartLayout title="추가 옵션">
      <Dropdown
        datas={options}
        renderItem={OptionItem}
        onClickItem={() => {}}
      />
    </PartLayout>
  );
};

export default SelectOptionForm;
