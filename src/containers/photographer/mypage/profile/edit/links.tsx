import { useEffect } from "react";
import {
  FieldErrors,
  useFieldArray,
  UseFieldArrayRemove,
  useFormContext,
  UseFormRegister,
} from "react-hook-form";
import { Photographer } from "profile-types";
import { CustomButton } from "@/components/buttons/common-buttons";
import TextInput from "@/components/inputs/text-input";
import popToast from "@/components/common/toast";
import { editStyles, linkStyles } from "./edit.css";

const LinkItem = ({
  register,
  remove,
  index,
  errors,
}: {
  register: UseFormRegister<Photographer>;
  remove: UseFieldArrayRemove;
  index: number;
  errors: FieldErrors<Photographer>;
}) => {
  function handleRemoveLink() {
    remove(index);
  }

  return (
    <div className={linkStyles.container}>
      <div className={linkStyles.wrapper}>
        <input
          className={linkStyles.name}
          placeholder="제목을 입력해주세요"
          {...register(`linkInfos.${index}.name`)}
        />
        <div className={editStyles.buttonsWrapper}>
          <CustomButton
            size="xs"
            styleType="line"
            title="삭제"
            onClick={handleRemoveLink}
          />
        </div>
      </div>
      {errors.linkInfos?.[index]?.name && (
        <span className={linkStyles.error}>
          {errors.linkInfos?.[index]?.name?.message}
        </span>
      )}
      <TextInput<Photographer>
        placeholder="https://"
        formField={`linkInfos.${index}.src`}
        container={{ margin: 0 }}
      />
      {errors.linkInfos?.[index]?.src && (
        <span className={linkStyles.error}>
          {errors.linkInfos?.[index]?.src?.message}
        </span>
      )}
    </div>
  );
};

const Links = () => {
  const MAX_LINK_COUNT = 5;

  const {
    watch,
    control,
    register,
    formState: { errors },
  } = useFormContext<Photographer>();
  const { append, remove } = useFieldArray({ control, name: "linkInfos" });
  const linkInfos = watch("linkInfos");

  function handleAddLink() {
    append({ name: "", src: "" });
  }

  useEffect(() => {
    if (linkInfos.length === MAX_LINK_COUNT) {
      popToast("외부 링크는 5개까지 등록 가능합니다.", "");
    }
  }, [linkInfos]);

  return (
    <div className={editStyles.link}>
      <span className={editStyles.title}>
        외부 링크 관리 ({linkInfos.length}/{MAX_LINK_COUNT})
      </span>
      <div className={editStyles.linksWrapper}>
        {linkInfos.map((_, index) => (
          <LinkItem
            key={index}
            index={index}
            register={register}
            remove={remove}
            errors={errors}
          />
        ))}
      </div>
      <CustomButton
        size="md"
        styleType="line"
        title="링크 추가하기"
        disabled={linkInfos.length === MAX_LINK_COUNT}
        onClick={handleAddLink}
      />
    </div>
  );
};

export default Links;
