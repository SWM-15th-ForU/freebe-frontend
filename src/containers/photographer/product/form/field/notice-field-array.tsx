import { useFieldArray, useFormContext } from "react-hook-form";
import { ProductFormdata } from "product-types";
import { CustomButton } from "@/components/buttons/common-buttons";
import { REQUIRED_NOTICES_BOUND } from "@/constants/photographer/mypage";
import { formStyles } from "../form.css";
import NoticeInput from "./notice-input";

const NoticeFieldArray = ({ disabled }: { disabled?: boolean }) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<ProductFormdata>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "notices",
  });

  // TODO: 공통 컴포넌트 병합 이후 안내사항 추가
  return (
    <div style={{ minWidth: "fit-content" }}>
      <span className={formStyles.subtitle}>촬영 공지사항</span>
      {fields.map((item, index) => {
        return (
          <NoticeInput
            key={item.id}
            formRegister={register}
            index={index}
            onClickRemove={() => remove(index)}
            errors={errors}
            disabled={disabled}
            required={index < REQUIRED_NOTICES_BOUND}
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
              title: "새 공지사항",
              content: "",
            })
          }
          title="추가하기"
        />
      )}
    </div>
  );
};

export default NoticeFieldArray;
