import { useFieldArray, useFormContext } from "react-hook-form";
import Dropdown from "@/components/common/dropdown";
import popToast from "@/components/common/toast";
import { formatPrice } from "@/utils/parse";
import { Option, reservation } from "product-types";
import PartLayout from "../part-layout";
import { optionFormsStyles } from "./parts.css";
import OptionController from "./option-controller";

const OptionItem = ({ title, price }: Option) => {
  return (
    <div className={optionFormsStyles.wrapper}>
      <span className={optionFormsStyles.title}>{title}</span>
      <span className={optionFormsStyles.price}>{formatPrice(price)}</span>
    </div>
  );
};

const SelectOptionForm = ({ options }: { options: Option[] }) => {
  const { control, watch, setValue } = useFormContext<reservation.FormType>();
  const { append, remove } = useFieldArray<reservation.FormType>({
    control,
    name: "options",
  });
  const selectedOptionList = watch("options");

  function handleAddOption(index: number) {
    const selectedIndexList = selectedOptionList.map((option) => option.index);
    if (selectedIndexList.includes(index)) {
      popToast("이미 선택된 옵션입니다.");
    } else {
      const basePrice = options[index].price || 0;
      append({
        index,
        quantity: 1,
        title: options[index].title,
        price: basePrice,
      });
    }
  }

  function handleRemoveOption(index: number) {
    remove(index);
  }

  function handleChangeQuantity(index: number, newQuantity: number) {
    const optionIndex = selectedOptionList[index].index;
    const basePrice = options[optionIndex].price || 0;

    setValue(`options.${index}.quantity`, newQuantity);
    setValue(`options.${index}.price`, newQuantity * basePrice);
  }

  return (
    <PartLayout title="추가 옵션">
      <Dropdown
        placeholder="추가 옵션"
        datas={options}
        renderItem={OptionItem}
        onClickItem={(index) => {
          handleAddOption(index);
        }}
      />
      <div className={optionFormsStyles.controllerWrapper}>
        {selectedOptionList.map((option, index) => {
          return (
            <OptionController
              key={option.title}
              onChangeQuantity={(newQuantity) =>
                handleChangeQuantity(index, newQuantity)
              }
              onClickDelete={() => handleRemoveOption(index)}
              option={option}
              isLast={index === selectedOptionList.length - 1}
            />
          );
        })}
      </div>
    </PartLayout>
  );
};

export default SelectOptionForm;
