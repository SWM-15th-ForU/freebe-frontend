import {
  useFieldArray,
  UseFieldArrayRemove,
  useFormContext,
  UseFormRegister,
} from "react-hook-form";
import { Photographer } from "profile-types";
import { CustomButton } from "@/components/buttons/common-buttons";
import TextInput from "@/components/inputs/text-input";
import { editStyles, linkStyles } from "./edit.css";

const LinkItem = ({
  register,
  remove,
  index,
}: {
  register: UseFormRegister<Photographer>;
  remove: UseFieldArrayRemove;
  index: number;
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
      <TextInput<Photographer>
        placeholder="https://"
        formField={`linkInfos.${index}.src`}
        container={{ margin: 0 }}
      />
    </div>
  );
};

const Links = () => {
  const MAX_LINK_COUNT = 5;

  const { watch, control, register } = useFormContext<Photographer>();
  const { append, remove } = useFieldArray({ control, name: "linkInfos" });
  const linkInfos = watch("linkInfos");

  function handleAddLink() {
    append({ name: "", src: "" });
  }

  return (
    <div className={editStyles.link}>
      <span className={editStyles.title}>
        외부 링크 관리 ({linkInfos.length}/5)
      </span>
      <div className={editStyles.linksWrapper}>
        {linkInfos.map((link, index) => (
          <LinkItem
            key={link.name}
            index={index}
            register={register}
            remove={remove}
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
