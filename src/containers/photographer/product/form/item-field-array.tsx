import { useFieldArray, useFormContext } from "react-hook-form";
import { ProductFormdata } from "product-types";
import { AddButton } from "@/components/buttons/common-buttons";
import ItemInput from "./item-input";
import { formStyles } from "../product.css";

const ItemFieldArray = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<ProductFormdata>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  return (
    <div style={{ width: "100%" }}>
      <span className={formStyles.subtitle}>상품 구성</span>

      {fields.map((item, index) => {
        return (
          <ItemInput
            key={item.id}
            formRegister={register}
            index={index}
            onClickRemove={() => remove(index)}
            errors={errors}
          />
        );
      })}
      <AddButton
        onClick={() =>
          append({
            title: "",
            content: "",
            description: "",
          })
        }
        title="추가하기"
      />
    </div>
  );
};

export default ItemFieldArray;
