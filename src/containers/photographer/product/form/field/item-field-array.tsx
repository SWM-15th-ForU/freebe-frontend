import { useFieldArray, useFormContext } from "react-hook-form";
import { ProductFormdata } from "product-types";
import { CustomButton } from "@/components/buttons/common-buttons";
import CheckBox from "@/components/inputs/checkbox";
import InfoCaption from "@/components/common/info-caption";
import ItemInput from "./item-input";
import { formStyles, inputStyles, textInput } from "../form.css";

const ItemFieldArray = ({ disabled }: { disabled?: boolean }) => {
  const {
    control,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext<ProductFormdata>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });
  const allowPreferredPlace = watch("allowPreferredPlace");

  function handleClickCheckbox() {
    const currentAvailability = getValues("allowPreferredPlace");
    setValue("allowPreferredPlace", !currentAvailability);
  }

  return (
    <div style={{ minWidth: "fit-content" }}>
      <div style={{ marginBottom: 20 }}>
        <span className={formStyles.subtitle}>기본 가격</span>
        <div className={inputStyles.content}>
          <input
            className={textInput}
            disabled={disabled}
            placeholder="가격을 입력해 주세요."
            type="number"
            onWheel={(e) => {
              e.currentTarget.blur();
            }}
            {...register("basicPrice")}
          />
          <span>원</span>
        </div>
        {errors.basicPrice && (
          <span className={formStyles.error}>{errors.basicPrice?.message}</span>
        )}
      </div>
      <div style={{ marginBottom: 20 }}>
        <span className={formStyles.subtitle}>촬영 장소</span>
        <div className={inputStyles.content}>
          <input
            className={textInput}
            disabled={disabled}
            placeholder="장소를 입력해주세요."
            type="text"
            {...register("basicPlace")}
          />
        </div>
        {errors.basicPlace && (
          <span className={formStyles.error}>{errors.basicPlace?.message}</span>
        )}
      </div>
      {disabled ? (
        <div style={{ marginBottom: 40 }}>
          <CheckBox
            checked={allowPreferredPlace}
            onPress={() => {}}
            title="고객이 신청할 때 희망 장소를 작성할 수 있습니다."
          />
        </div>
      ) : (
        <div style={{ marginBottom: 40 }}>
          <CheckBox
            checked={allowPreferredPlace}
            onPress={handleClickCheckbox}
            title="고객이 신청할 때 희망 장소를 작성할 수 있습니다."
          />
          <InfoCaption
            container={{ marginLeft: 40 }}
            information="촬영 장소가 협의 후 확정될 예정이라면, 위 항목을 선택해주세요."
          />
        </div>
      )}
      <span className={formStyles.subtitle}>상품 구성</span>
      {fields.map((item, index) => {
        return (
          <ItemInput
            key={item.id}
            formRegister={register}
            index={index}
            onClickRemove={() => remove(index)}
            errors={errors}
            disabled={disabled}
          />
        );
      })}
      {!disabled && (
        <CustomButton
          styleType="line"
          size="md"
          style={{ marginTop: 20 }}
          onClick={() =>
            append({
              title: "",
              content: "",
              description: "",
            })
          }
          title="추가하기"
        />
      )}
    </div>
  );
};

export default ItemFieldArray;
