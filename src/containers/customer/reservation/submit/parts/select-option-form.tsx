import { useFieldArray, useFormContext } from "react-hook-form";
import Dropdown from "@/components/common/dropdown";
import { Option, reservation } from "product-types";
import PartLayout from "../part-layout";
import { OptionFormsStyles } from "./parts.css";

const OptionItem = ({ title, price }: Option) => {
  return (
    <div className={OptionFormsStyles.wrapper}>
      <span className={OptionFormsStyles.title}>{title}</span>
      <span className={OptionFormsStyles.price}>
        {price ? `${price}원` : "무료 옵션"}
      </span>
    </div>
  );
};

const SelectOptionForm = ({ options }: { options: Option[] }) => {
  const { control, watch } = useFormContext<reservation.FormType>();
  const { append, remove } = useFieldArray<reservation.FormType>({
    control,
    name: "options",
  });
  const selectedOptionList = watch("options");

  function handleAddOption(index: number) {
    const selectedIndexList = selectedOptionList.map((option) => option.index);
    if (selectedIndexList.includes(index)) {
      alert("이미 선택된 옵션입니다.");
    } else {
      const basePrice = options[index].price;
      append({
        index,
        quantity: 1,
        title: options[index].title,
        price: basePrice || 0,
      });
    }
  }

  return (
    <PartLayout title="추가 옵션">
      <Dropdown
        datas={options}
        renderItem={OptionItem}
        onClickItem={(index) => {
          handleAddOption(index);
        }}
      />
      {selectedOptionList.map((option) => {
        return <div key={option.title}>{option.title}</div>;
      })}
    </PartLayout>
  );
};

export default SelectOptionForm;
